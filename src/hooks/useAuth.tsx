"use client";

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthCtx } from "@/providers/AuthProvider";

export const useAuth = () => {
  const {
    currentUser,
    loading,
    login,
    fetchCurrentUser,
    getCurrentUser,
    setCurrentUser,
    setLoading,
    logout,
  } = useContext(AuthCtx);

  return {
    currentUser,
    loading,
    login,
    logout,
    setLoading,
    fetchCurrentUser,
    getCurrentUser,
    setCurrentUser
  };
};

export const useAuthProtection = (options: {
  redirect: string;
  preventAuthenticatedUser?: boolean;
  preventUnAuthenticatedUser?: boolean;
}) => {
  const router = useRouter();
  const { currentUser, loading, getCurrentUser, setLoading } = useAuth();

  useEffect(() => {
    (async () => {
      setLoading(true);
      const user = await getCurrentUser();
      if (options?.preventAuthenticatedUser) {
        if (user) {
          await router.replace(options.redirect);
        }
      } else if (options?.preventUnAuthenticatedUser) {
        if (!user) {
          await router.back();
        }
      }
      setLoading(false);
      return;
    })();
  }, []);

  return { currentUser, loading };
};
