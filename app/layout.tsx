import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bùi Trí Dũng — Creative Developer",
  description: "The personal portfolio of Bùi Trí Dũng. Design, technology, and a curious mind. Based in Vietnam.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
