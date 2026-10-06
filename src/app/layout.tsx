import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const helvetica = localFont({
  src: [
    {
      path: "./fonts/Helvetica-World-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Helvetica-World-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Helvetica-World-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Helvetica-World-Bold-Italic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-helvetica",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Teodora Foss | Psicóloga",
  description:
    "Um espaço seguro e acolhedor para redescobrir sua força interior e cultivar uma vida com mais clareza e propósito.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${helvetica.variable}`}>
      <body className="font-sans bg-cream text-text-main antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}