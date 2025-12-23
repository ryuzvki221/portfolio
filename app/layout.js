import "../styles/main.scss";
import { Archivo } from "next/font/google";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Ryuzvki | Personal Portfolio",
  description: "Full-stack developer specializing in modern web applications. Discover my projects and skills.",
  authors: [{ name: "Ryuzvki" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={archivo.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
