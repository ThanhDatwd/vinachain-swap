import { AxiosInstance } from "axios";
import Cookies from "js-cookie";
import { onToast } from "@/hooks/useToast";
import restConnector from "@/connectors/AxiosRestConector";

const AUTHORIZATION_HEADER = "Authorization";
export const ACCESS_TOKEN = "jwt";

export class AuthService {
  private jwt: string | null;
  private restConnector: AxiosInstance;

  constructor(options: { restConnector: AxiosInstance }) {
    this.jwt = null;
    this.restConnector = options.restConnector;
    this.loadAccessToken();
  }

  public async register(values: {
    email: string;
    username: string;
    password: string;
    refCode: string;
  }): Promise<any | null> {
    const { data } = await restConnector.post("/auth/register", {
      ...values,
    });

    return data;
  }
  public async verifyEmail(values: { token: string }): Promise<any | null> {
    const { data } = await restConnector.post("/auth/verify-email", {
      token: values.token,
    });
    return data;
  }

  public async login(values: {
    username: string;
    password: string;
  }): Promise<any | null> {
    const { data } = await restConnector.post("/auth/login", {
      usernameOrEmail: values.username,
      password: values.password,
    });

    if (data.success) {
      this.setAccessToken(data.data.access_token);
    }
    return data;
  }

  setAccessToken(token: any) {
    if (typeof window !== "undefined") {
      this.jwt = token;
      localStorage.setItem(ACCESS_TOKEN, token);
    }
  }

  public async fetchCurrentUser() {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
      return null;
    }
    try {
      const { data } = await restConnector.get("/auth/whoami");
      if (data.success) {
        return data.data;
      }
      this.setAccessToken(null);
      return null;
    } catch (error) {}
  }

  loadAccessToken() {
    // On browser, load access token from local storage.
    if (typeof window !== "undefined") {
      const accessToken = localStorage.getItem(ACCESS_TOKEN);

      if (accessToken) {
        restConnector.defaults.headers[AUTHORIZATION_HEADER] =
          `Bearer ${accessToken}`;
      }
      return accessToken;
    }
  }
  logout() {
    this.jwt = null;
    localStorage.removeItem(ACCESS_TOKEN);
  }
  public async forgotPassword(values: { email: string }): Promise<any | null> {
    const { data } = await restConnector.post("/auth/forgot-password", {
      email: values.email,
    });

    return data;
  }
}

export const authService = new AuthService({ restConnector });
