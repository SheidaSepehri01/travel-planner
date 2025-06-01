import { create } from "zustand";
import axios from "axios";
import { AuthStoreType } from "../types/auth";
const baseURL = process.env.NEXT_PUBLIC_API_URL;
export const useAuthStore = create<AuthStoreType>((set) => ({
  ApiState: "idle",
  user: null,
  error: null,
  registerUser: async (username: string, password: string) => {
    set({ ApiState: "loading" });
    try {
      const response = await axios.post(
        `${baseURL}/auth/register`,
        {
          name: username,
          password: password,
        },
        { withCredentials: true }
      );
      set({ user: response.data.data.user, ApiState: "success", error: null });
      return true;
    } catch (err: unknown) {
      console.error("Signup error:", err);
      if (axios.isAxiosError(err)) {
        set({
          error: err.response?.data.message || "An error occurred",
          ApiState: "error",
        });
      } else {
        set({
          error: "An error occurred",
          ApiState: "error",
        });
      }
      return false;
    }
  },
  loginUser: async (username: string, password: string) => {
    set({ ApiState: "loading" });
    try {
      const response = await axios.post(
        `${baseURL}/auth/login`,
        {
          name: username,
          password: password,
        },
        { withCredentials: true }
      );
      set({ user: response.data.data.user, ApiState: "success", error: null });
      return true;
    } catch (err: unknown) {
      console.error("Login error:", err);
      if (axios.isAxiosError(err)) {
        set({
          error: err.response?.data.message || "An error occurred",
          ApiState: "error",
        });
      } else {
        set({
          error: "An error occurred",
          ApiState: "error",
        });
      }
      return false;
    }
  },
  logoutUser: () => {
    set({ user: null, ApiState: "idle", error: null });
  },
}));
