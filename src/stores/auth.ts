import { create } from "zustand";
import axios from "axios";
import { AuthStoreType } from "../types/auth";

export const useAuthStore = create<AuthStoreType>((set) => ({
  ApiState: "idle",
  user: null,
  error: null,
  registerUser: async (username: string, password: string) => {
    set({ ApiState: "loading" });
    try {
      const response = await axios.post("http://localhost:8000/register", {
        name: username,
        password: password,
      });
      set({ user: response.data.name, ApiState: "success" });
    } catch (err: any) {
      console.error("Signup error:", err);
      set({ error: err?.response?.data?.message, ApiState: "error" });
    }
  },
}));
