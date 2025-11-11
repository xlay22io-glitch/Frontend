import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type AuthState = {
  isAuthenticated: boolean;
  token: string | null;
  refreshToken: string | null;

  setToken: (token: string) => void;
  setRefreshToken: (refreshToken: string) => void;
  clearAuth: () => void;
};

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      token: null,
      refreshToken: null,
      questionnaireCompleted: false,

      setToken: (token) => set({ token, isAuthenticated: !!token }),
      setRefreshToken: (refreshToken) => set({ refreshToken }),
      clearAuth: () =>
        set({
          isAuthenticated: false,
          token: null,
          refreshToken: null,
        }),
    }),
    {
      name: "auth-trade-layback-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;
