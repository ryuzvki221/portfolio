
import "../styles/globals.css";
import "../styles/main.scss";

export const metadata = {
  title: "Ryuzvki | Personal Portfolio",
  description: "Full-stack developer specializing in modern web applications. Discover my projects and skills.",
  authors: [{ name: "Ryuzvki" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
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
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
