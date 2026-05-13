import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./styles/app.css";

import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { AppShell, Box, ColorSchemeScript, MantineProvider, createTheme, mantineHtmlProps, useComputedColorScheme, useMantineTheme } from '@mantine/core';

import NavigationBar from "./components/Layout/NavigationBar";
import Footer from "./components/Layout/Footer";
import { customTheme } from "./styles/themes";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <ColorSchemeScript />
        <Meta />
        <Links />
      </head>
      <body className="h-screen">
        <MantineProvider
          theme={customTheme}
        >
          {children}
        </MantineProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {

  const theme = useMantineTheme()
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return <>
    <AppShell
      bg={computedColorScheme === 'dark' ? theme.colors.darkBlue[0] : theme.white}
      c={computedColorScheme === 'dark' ? theme.colors.gray[4] : theme.colors.gray[6]}>
      <AppShell.Header mih={88}
        bg={computedColorScheme === 'dark' ? theme.colors.darkBlue[0] : theme.white}
        bd={`solid 1px ${computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.blue[1]}`}
        style={{boxShadow: `0px 2px 10px 6px ${computedColorScheme === 'dark' ? 'rgba(3, 84, 166, 0.08)' : 'rgba(1, 17, 33, 0.04)'}`}}
      >
        <NavigationBar/>
      </AppShell.Header>
      <AppShell.Main pt={88}>
        <Outlet/>
        <Box bg={theme.colors.blue[6]} px={40} py={60}>
          <Footer/>
        </Box>
      </AppShell.Main>
    </AppShell>
  </>;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
