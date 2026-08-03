import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Nikhitha Somineni — DevOps Engineer",
  description:
    "DevOps Engineer with 5+ years across AWS, Azure, Kubernetes, Terraform and CI/CD.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${grotesk.variable} ${mono.variable}`}
        style={{ fontFamily: "var(--font-sans), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
