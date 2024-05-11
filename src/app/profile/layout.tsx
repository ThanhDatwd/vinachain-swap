import { AuthenticationLayout } from "@/components/layouts/AuthenticationLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* {children} */}
      <AuthenticationLayout>{children}</AuthenticationLayout>
    </>
  );
}
