import Stripe from "stripe";

export interface Env {
  STRIPE_WEBHOOK_SECRET: string;
}

const WEBHOOK_PATH = "/webhooks/stripe";

async function handleStripeWebhook(
  request: Request,
  env: Env
): Promise<Response> {
  const signature = request.headers.get("Stripe-Signature");
  if (!signature) {
    return new Response("Missing Stripe-Signature header", { status: 400 });
  }

  const body = await request.text();

  let event: Stripe.Event;
  try {
    event = await Stripe.webhooks.constructEventAsync(
      body,
      signature,
      env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Invalid signature";
    console.error("Webhook signature verification failed:", message);
    return new Response(`Webhook Error: ${message}`, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed":
    case "payment_intent.succeeded":
    case "payment_intent.payment_failed":
      console.log(`Handled ${event.type}`, event.id);
      break;
    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return new Response(JSON.stringify({ received: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname !== WEBHOOK_PATH) {
      return new Response("Not Found", { status: 404 });
    }

    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    return handleStripeWebhook(request, env);
  },
};
