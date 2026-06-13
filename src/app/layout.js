import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Shorolipi | Modern Educational SaaS Platform",
  description: "Empowering education through technology. Shorolipi is a next-generation SaaS platform for schools and educators.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.className} h-full antialiased scroll-smooth`}
    >
      <body 
        className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/10 selection:text-primary"
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
