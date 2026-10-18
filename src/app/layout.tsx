import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Prajwal Ravi Devadiga — AI & ML Engineer",
  description:
    "Portfolio of Prajwal Ravi Devadiga — AI & ML undergraduate specializing in anomaly detection, deep learning, computer vision, and interactive web applications.",
  keywords: [
    "Prajwal Ravi Devadiga",
    "AI Engineer",
    "Machine Learning",
    "Portfolio",
    "React",
    "TensorFlow",
    "Computer Vision",
  ],
  openGraph: {
    title: "Prajwal Ravi Devadiga — AI & ML Engineer",
    description:
      "AI & ML undergraduate specializing in anomaly detection, deep learning, computer vision, and interactive web applications.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
