"use client";

import { onToast } from "@/hooks/useToast";
import { authService } from "@/services/AuthServices";
import { errorMsg } from "@/utils/errMsg";
import { AxiosError } from "axios";
import { t } from "i18next";
import { useRouter } from "next/navigation";
import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";

interface AuthCtxProps {
  currentUser: any;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  login: (values: { username: string; password: string }) => Promise<any>;
  logout: () => void;
  fetchCurrentUser: () => Promise<any>;
  getCurrentUser: () => Promise<any>;
  setCurrentUser: Dispatch<SetStateAction<any | null>>;
}

const defaultCtxVal: AuthCtxProps = {
  currentUser: null,
  loading: false,
  login: (values: { username: string; password: string }) =>
    new Promise((resolve, reject) => reject(null)),
  logout: () => {},
  fetchCurrentUser: () => new Promise((resolve, reject) => reject(null)),
  getCurrentUser: () => new Promise((resolve, reject) => reject(null)),
  setLoading: (value: SetStateAction<boolean>): void => {},
  setCurrentUser: (value: SetStateAction<any | null>): void => {},
};

export const AuthCtx = createContext<AuthCtxProps>(defaultCtxVal);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const login = async (values: {
    username: string;
    password: string;
  }): Promise<any> => {
    try {
      setLoading(true);

      const res = await authService.login(values);
      if (res.success && res.data.user) {
        authService.setAccessToken(res.data.access_token);
        authService.loadAccessToken();
        const userFetch = await authService.fetchCurrentUser();

        if (userFetch) {
          setCurrentUser(userFetch);
        }

        setLoading(false);
        return res.data;
      } else {
        setLoading(false);
        onToast(t(`errorMsg.${errorMsg(res.code)}`), "error");
      }
    } catch (error: AxiosError | any) {
      setLoading(false);
      onToast(t(`errorMsg.${error.data.code}`), "error");
    }
  };

  const logout = async () => {
    authService.logout();
    setCurrentUser(null);
    await router.push("/login");
  };

  const fetchCurrentUser = async (): Promise<any | null> => {
    setLoading(true);
    authService.loadAccessToken();
    const currentUser = await authService.fetchCurrentUser();
    setCurrentUser(currentUser);

    setLoading(false);

    return currentUser;
  };

  return (
    <AuthCtx.Provider
      value={{
        currentUser,
        loading,
        setLoading,
        login,
        logout,
        fetchCurrentUser,
        setCurrentUser,
        getCurrentUser: async () => {
          if (!currentUser) {
            return fetchCurrentUser();
          }
          setLoading(false);
          return currentUser;
        },
      }}
    >
      {children}
    </AuthCtx.Provider>
  );
};
