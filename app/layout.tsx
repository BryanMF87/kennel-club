import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// Storyblok CMS
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "./components/StoryblokProvider";



const montserrat = Montserrat({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] }); 

export const metadata: Metadata = {
  title: "West Side Kennel Club",
  description: "Find your new best friend",
};

storyblokInit({
  accessToken: process.env.SB_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "us",
  },
});




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body className={`${montserrat.className} ${inter.className}`}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </StoryblokProvider>
  );
}
