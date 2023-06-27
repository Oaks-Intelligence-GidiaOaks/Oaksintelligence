"use client";
import { Wrapper } from "@/components/admin/Wrapper";
import { AppProvider } from "@/contexts/AppContext";

// Error components must be Client Components

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <head>
        <link rel="icon" type="image/png" href="/oaks-icon.png" />
      </head>
      <body>
        <h2>Something went wrong!</h2>
        <AppProvider>
          <Wrapper>
            <button onClick={() => reset()}>
              Please check your network and try again.
            </button>
          </Wrapper>
        </AppProvider>
      </body>
    </html>
  );
}
