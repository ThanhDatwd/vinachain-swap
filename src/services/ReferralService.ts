import restConnector from "@/connectors/AxiosRestConector";
import { AxiosInstance } from "axios";

export class ReferralService {
  private restConnector: AxiosInstance;

  constructor(options: { restConnector: AxiosInstance }) {
    this.restConnector = options.restConnector;
  }

  public async getListReferral(pagination: {
    limit: number;
    offset: number;
  }): Promise<any | null> {
    const { data } = await restConnector.get("/user-referrals/rewards", {
      params: { ...pagination },
    });
    return data;
  }
  public async getReferralAnalytic(walletAddress:string): Promise<any | null> {
    const { data } = await restConnector.get(`/user-referrals/analytics?walletAddress=${walletAddress}`);
    return data;
  }

  public async getDirectReferralReward(pagination: {
    limit: number;
    offset: number;
  }): Promise<any | null> {
    const { data } = await restConnector.get("/user-referrals/direct-reward", {
      params: { ...pagination },
    });
    return data;
  }
}

export const referralService = new ReferralService({ restConnector });
