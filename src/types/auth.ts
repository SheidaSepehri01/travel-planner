import { ApiState } from "./utiles";

export type AuthStoreType = {
  ApiState: ApiState;
  user: string | null;
  error: string | null;
  registerUser: (username: string, password: string) => Promise<boolean>;
  loginUser: (username: string, password: string) => Promise<boolean>;
  logoutUser: () => void;
};
