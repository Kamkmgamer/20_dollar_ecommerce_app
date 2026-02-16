import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Company Name",
  description: "A simple online store. Contact us on WhatsApp to order.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="whatsapp-banner">
          <p style={{ margin: 0 }}>
            <strong>Tip:</strong> Want to order quickly?{" "}
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              Message us on WhatsApp
            </a>{" "}
            - we respond fast!
          </p>
        </div>
        <header className="wp-site-header">
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 1.5rem" }}>
            <p className="wp-site-title">
              <Link href="/">Your Company Name</Link>
            </p>
          </div>
        </header>
        <main className="wp-main-content">{children}</main>
        <footer className="wp-footer">
          <div className="wp-footer-content">
            <p className="wp-powered-by">
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                Order via WhatsApp
              </a>
              {" | "}
              <a href="mailto:contact@example.com">contact@example.com</a>
            </p>
            <p className="wp-powered-by" style={{ marginTop: "1rem" }}>
              Proudly powered by{" "}
              <a href="https://wordpress.org" target="_blank" rel="noopener noreferrer">
                WordPress
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
