# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Cloudflare Pages (production site)

The app builds as a static site (`ssr: false`) with prerendered routes including every blog slug under `/blogs/:slug`.

| Setting | Value |
|---------|--------|
| Build command | `npm run build` |
| Build output directory | `build/client` |
| Node version | 20+ |

Do **not** add a `public/_redirects` catch-all (e.g. `/* /__spa-fallback.html 200`). Cloudflare Pages strips `.html` and can turn that rule into a redirect loop to `/__spa-fallback`. This app prerenders every route, and Pages already serves `index.html` for unknown paths when no `404.html` is present.

Preview locally:

```bash
npm run build
npx serve build/client -s
```

`-s` enables SPA mode (404s fall back to `index.html`). Prerendered routes like `/blogs/<slug>` are served as real files and do not need that fallback. To mimic Cloudflare’s `__spa-fallback.html` for unknown paths, add a `serve.json` inside `build/client` (see [serve-handler rewrites](https://github.com/vercel/serve-handler#rewrites)).

Adding a new MDX post requires a rebuild and redeploy so the new `/blogs/<slug>` HTML is generated.

### Stripe webhooks (Cloudflare Worker)

Webhooks live in a **separate** Worker, not in the React Router app.

```bash
cd workers/stripe-webhook
npm install
wrangler secret put STRIPE_WEBHOOK_SECRET
wrangler deploy
```

Attach the Worker to `https://api.<your-domain>/webhooks/stripe` (recommended subdomain) in the Cloudflare dashboard.

Local testing:

```bash
cd workers/stripe-webhook
wrangler dev
# In another terminal:
stripe listen --forward-to localhost:8787/webhooks/stripe
```

### Docker (local dev and preview)

Use Docker to run a production-like build without installing Node on your machine. This is handy for local preview and parity testing; **production** for the marketing site is still Cloudflare Pages (`build/client`).

Build and run:

```bash
docker build -t jake-personal-website .
docker run -p 3000:3000 jake-personal-website
```

The container runs `npm run build` during the image build, then `npm start` (`react-router-serve` on `build/server`) at runtime. Open `http://localhost:3000`.

For day-to-day development with HMR, prefer `npm run dev` on the host (no Docker required).

The same image can be deployed to any Docker host (Fly.io, Railway, AWS ECS, etc.) if you want a Node server instead of static Pages.

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
