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
