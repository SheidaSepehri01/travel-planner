export type AuthStoreType = {
  ApiState: "idle" | "loading" | "success" | "error";
  user: string | null;
  error: string | null;
  registerUser: (username: string, password: string) => Promise<void>;
};
