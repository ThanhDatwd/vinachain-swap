
import { Metadata } from "next";
import "../../styles/scan.css";

export const metadata: Metadata = {
  title: "Vinachain (VPC) Blockchain Explorer",
};
export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <main>{children}</main>
      </body>
    </html>
  );
}
