import { create } from "zustand";

interface State{
    isActive: boolean;
    setActive: (isActive: boolean) => void;
}

export const useView = create<State>((set) => ({
    isActive: false,
    setActive: (isActive:boolean) => set({isActive: isActive}),
}));
