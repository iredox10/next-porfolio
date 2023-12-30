import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import SocialMediaLinks from "./components/SocialMediaLinks";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "Home Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <Header />
        {children}
          <SocialMediaLinks />
      </body>
    </html>
  );
}
