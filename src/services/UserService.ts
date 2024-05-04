import restConnector from "@/connectors/AxiosRestConector";
import { AxiosInstance } from "axios";

export class UserService {
  private restConnector: AxiosInstance;

  constructor(options: { restConnector: AxiosInstance }) {
    this.restConnector = options.restConnector;
  }

  public async linkWalletAddress(values: {
    walletAddress: string;
    signature: string;
  }): Promise<any | null> {
    const { data } = await restConnector.post("/users/link-wallet", {
      ...values,
    });

    return data;
  }
}

export const userService = new UserService({ restConnector });
