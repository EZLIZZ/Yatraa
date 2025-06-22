import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import ReduxProvider from "@/store/ReduxProvider";
// import { SidebarProvider } from "@/components/ui/sidebar";
// import LeftSidebar from "@/components/ui/LeftSidebar";
import { AOSProvider } from "@/lib/utils/AOSProvider";

export const metadata: Metadata = {
  title: "Yatraa",
  description: "Travel the World",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AOSProvider />

        <ReduxProvider>
          <Navbar />

          <main>{children}</main>
        </ReduxProvider>
      </body>
    </html>
  );
}
