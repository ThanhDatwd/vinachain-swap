"use client";

import { onToast } from "@/hooks/useToast";
import { useConnectorByName } from "@/pkgs/wallet-connector/connector";
import { useWalletContext } from "@/pkgs/wallet-connector/context";
import { authService } from "@/services/AuthServices";
import { stakeService } from "@/services/StakeService";
import { swapService } from "@/services/SwapService";
import { errorMsg } from "@/utils/errMsg";
import { SwapPackage, User } from "@/utils/type";
import { AxiosError } from "axios";
import { changeLanguage, t } from "i18next";
import { useRouter } from "next/navigation";
import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useEffect,
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
  swapPackageBalanceSwapped: number;
  fetchSwapPackageBalanceRemaining: () => Promise<any>;
  availableAmount: number;
  fetchAvailableAmount: () => Promise<any>;
  swapPackageBought: SwapPackage | null;
  isUserBuyPlan: boolean;
  fetchPurchasePlanStatus: (account: string) => Promise<any>;
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
  swapPackageBalanceSwapped: 0,
  fetchSwapPackageBalanceRemaining: () =>
    new Promise((resolve, reject) => reject(null)),
  availableAmount: 0,
  isUserBuyPlan: false,
  fetchAvailableAmount: () => new Promise((resolve, reject) => reject(null)),
  swapPackageBought: null,
  fetchPurchasePlanStatus: () => new Promise((resolve, reject) => reject(null)),
};

export const AuthCtx = createContext<AuthCtxProps>(defaultCtxVal);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const { connectorName } = useWalletContext();
  const {
    hook,
    connector: { provider },
  } = useConnectorByName(connectorName);
  const account = hook.useAccount();

  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [swapPackageBought, setSwapPackageBought] =
    useState<SwapPackage | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [swapPackageBalanceSwapped, setSwapPackageBalanceSwapped] =
    useState<number>(0);
  const [availableAmount, setAvailableAmount] = useState<number>(0);
  const [isUserBuyPlan, setIsUserBuyPlan] = useState<boolean>(false);

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
          fetchAvailableAmount();
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
    router.push("/login");
  };

  const fetchCurrentUser = async (): Promise<User | null> => {
    setLoading(true);
    authService.loadAccessToken();
    const currentUser = await authService.fetchCurrentUser();
    fetchAvailableAmount();
    fetchSwapPackageBalanceRemaining();
    // fetchPurchasePlanStatus()
    setCurrentUser(currentUser);

    setLoading(false);

    return currentUser;
  };

  const fetchSwapPackageBalanceRemaining = async () => {
    try {
      const res = await swapService.getSwapPackageBalanceRemaining();
      if (res.success) {
        if (res.data.totalAmountSwapped) {
          setSwapPackageBalanceSwapped(res.data.totalAmountSwapped);
        } else {
          setSwapPackageBalanceSwapped(0);
        }
        if (res.data.swapPackage) {
          setSwapPackageBought(res.data.swapPackage);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAvailableAmount = async () => {
    try {
      const res = await stakeService.getStakeAvailable();
      if (res.success && res.data > 0) {
        setAvailableAmount(res.data);
      } else {
        setAvailableAmount(0);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchPurchasePlanStatus = async (account: string) => {
    try {
      const res = await swapService.getBuySwapPackageStatus(account);

      if (res.success) {
        setIsUserBuyPlan(res.data.isPurchased);
        return res.data.isPurchased;
      } else {
        onToast(t(`errorMsg.${errorMsg(res.code)}`), "error");
      }
    } catch (error) {}
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
        swapPackageBalanceSwapped,
        fetchSwapPackageBalanceRemaining,
        availableAmount,
        swapPackageBought,
        fetchAvailableAmount,
        isUserBuyPlan,
        fetchPurchasePlanStatus,
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
