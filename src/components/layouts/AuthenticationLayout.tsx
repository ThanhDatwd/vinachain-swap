"use client";
import { useEffect } from "react";

import { useRouter } from "next/navigation";
import { useAuth } from "../../hooks/useAuth";
import { LoadingSpinner } from "../LoadingSpinner";
export const AuthenticationLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { currentUser, getCurrentUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    fetchUser();
  }, [currentUser]);

  const fetchUser = async () => {
    const user = await getCurrentUser();
    if (!user) {
      router.replace("/login");
    }
  };

  return (
    <>
      {currentUser ? (
        children
      ) : (
        <div className="h-screen flex justify-center items-center w-screen">
          <div className="w-10 h-10">
            <LoadingSpinner />
          </div>
        </div>
      )}
    </>
  );
};
