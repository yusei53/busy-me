import { Container, ThemeProvider } from "@mui/material";
import type { Metadata } from "next";
import theme from "./libs/theme/theme";

const siteName = "Busy me | todo可視化サービス";
const description = "思いつく限りタスクを吐き出し、整理するtodo可視化サービス";

export const metadata: Metadata = {
  metadataBase: new URL("https://busy-me.vercel.app/"),
  title: {
    default: siteName,
    template: "%s | Busy me",
  },
  description: description,
  openGraph: {
    type: "website",
    url: "https://busy-me.vercel.app/",
    title: siteName,
    description: description,
    siteName: siteName,
  },
  twitter: {
    title: siteName,
    description: description,
    card: "summary",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <ThemeProvider theme={theme}>
          <Container maxWidth="sm" sx={{ my: 7 }}>
            {children}
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
