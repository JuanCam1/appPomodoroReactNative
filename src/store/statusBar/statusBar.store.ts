import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";

interface StatusState {
  bgStatusBar: string;
  setBgStatusBar: (value: string) => void;
}

const storeApi: StateCreator<StatusState, [["zustand/devtools", never]]> = (set) => ({
  bgStatusBar: "#D94A4A",
  setBgStatusBar: (value) => set({ bgStatusBar: value }, false, "setBgStatusBar"),
  
});

export const useStatusStore = create<StatusState>()(devtools(storeApi));
