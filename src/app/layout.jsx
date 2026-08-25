import { Bricolage_Grotesque, Inter, IBM_Plex_Mono, Josefin_Sans } from "next/font/google";
import "./globals.css";

const display = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata = {
  title: "Gihan Danushka — Travel Digital Media Executive",
  description:
    "Portfolio of Gihan Danushka — web development, digital marketing, photography and videography for the travel industry.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} ${mono.variable}`}>
        {children}
      </body>
    </html>
  );
}
