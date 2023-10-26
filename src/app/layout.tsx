import type { Metadata } from "next";
import { Header, Footer } from ".";

import "./globals.css";

export const metadata: Metadata = {
  title: "Pokendex - Gotta know 'em all",
  description: "List all pokemons and their details in a pokedex-like style",
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
