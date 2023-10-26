import type { Metadata } from "next";
import { Header, Footer } from ".";

import "./globals.css";

export const metadata: Metadata = {
  title: "Components Library",
  description: "A collection of components usable in any project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
