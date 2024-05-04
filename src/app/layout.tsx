/* eslint-disable @next/next/no-page-custom-font */
import { ToastContainer } from "react-toastify";

import { AddressDetailProvider } from "@/components/AddressDetail/AdressDetailProvider";
import { WalletProvider } from "@/pkgs/wallet-connector/context";
import { AuthProvider } from "@/providers/AuthProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Web3Provider } from "@/providers/Web3Provider";
import { Metadata } from "next";
import "react-toastify/dist/ReactToastify.css";
import "../styles/index.css";

export const metadata: Metadata = {
  title: "Vinachain",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning={true}>
        <ThemeProvider>
          <Web3Provider>
            <WalletProvider>
              <AuthProvider>
                <AddressDetailProvider>
                  <ToastContainer theme="dark" />
                  <main>{children}</main>
                </AddressDetailProvider>
              </AuthProvider>
            </WalletProvider>
          </Web3Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
