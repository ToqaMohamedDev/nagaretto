import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThreeProvider } from "@/lib/ThreeContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "NAGARETTO",
  description:
    "Nagaretto - An online store specializing in high-quality hoodies and t-shirts with unique and trendy designs. Explore our collection to find the perfect style for you.",
  keywords:
    "Nagaretto, Nagaretto store, hoodies, t-shirts, online clothing shop, stylish hoodies, trendy t-shirts, unique designs, هوديز, تيشرتات, متجر نجاريتو, ملابس عصرية, تصاميم فريدة, متجر هوديز, متجر تيشرتات",
  authors: [{ name: "Alaa Taha", url: "https://www.alaatahadev.online/" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThreeProvider>
          {children}
          </ThreeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
