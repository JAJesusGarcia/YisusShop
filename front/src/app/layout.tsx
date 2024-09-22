import type { Metadata } from "next";
import { Nunito, Roboto } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import SubFooter from "@/components/SubFooter/SubFooter";
import { AuthProvider } from "@/context/authContext";
import { CartProvider } from "@/context/CartContext";

const primaryFont = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-primary",
});

const secondaryFont = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-secondary",
});

export const metadata: Metadata = {
  title: "YisusShop!",
  description: "Shop with YisusShop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <CartProvider>
        <html
          lang="en"
          className={`${primaryFont.variable} ${secondaryFont.variable}`}
        >
          <body className={primaryFont.className}>
            <Navbar />
            {children}
            <SubFooter />
            <Footer />
          </body>
        </html>
      </CartProvider>
    </AuthProvider>
  );
}
