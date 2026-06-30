import { create } from "zustand";

interface LoginState {
  isAuthModalActive: boolean;
  toggleAuthModal: (value: boolean) => void;
}

const useAuthModalState = create<LoginState>((set) => ({
  isAuthModalActive: false,
  toggleAuthModal: () => 
    set((state) => ({ isAuthModalActive: !state.isAuthModalActive })),
}));

export default useAuthModalState;
