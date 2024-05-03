import restConnector from "@/connectors/AxiosRestConector";
import { AxiosInstance } from "axios";

export class ExploreService {
  private restConnector: AxiosInstance;

  constructor(options: { restConnector: AxiosInstance }) {
    this.restConnector = options.restConnector;
  }

}

export const exploreService = new ExploreService({ restConnector });
