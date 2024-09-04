import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import Container from "@/components/common/Container";
import Footer from "@/components/section/Footer";

const archivo = Archivo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Careermap",
  description: "Our platform features more than 1.2 million job vacancies worldwide, connecting you with employers who value your skills and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={archivo.className}>
      <body className="bg-black text-white">
        <Container>{children}</Container>
        <Footer />
      </body>
    </html>
  );
}
