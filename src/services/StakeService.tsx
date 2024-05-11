import restConnector from "@/connectors/AxiosRestConector";
import { STAKING_CURRENCY } from "@/utils/constants";
import { AxiosInstance } from "axios";

export class StakeService {
  private restConnector: AxiosInstance;

  constructor(options: { restConnector: AxiosInstance }) {
    this.restConnector = options.restConnector;
  }

  public async staking(values: {
    amount?: number;
    txHash?: string;
    stakeCurrency: string;
    periodInDays: number;
  }): Promise<any | null> {
    const { data } = await restConnector.post("/user-stake/stake", {
      ...values,
    });

    return data;
  }
  public async getStakeAvailable(): Promise<any | null> {
    const { data } = await restConnector.get("/user-stake/available-amount");

    return data;
  }

  public async getStakeHistory(currency: string): Promise<any | null> {
    const { data } = await restConnector.get("/user-stake/history", {
      params: {
        currency,
      },
    });

    return data;
  }
  public async getListStakeHistory(value: {
    limit: number;
    offset: number;
    currency: string;
  }): Promise<any | null> {
    const { data } = await restConnector.get("/user-stake/history", {
      params: {
        ...value,
      },
    });
    return data;
  }
}

export const stakeService = new StakeService({ restConnector });
