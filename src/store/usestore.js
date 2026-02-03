import { create } from "zustand";

const usestore = create((set, get) => ({
  count: 0,

  increase: () => set((state) => ({ count: state.count + 1 })),

  decrease: () => set((state) => ({ count: state.count - 1 })),

  double: () => set((state) => ({ count: state.count * 2 })),

  tripple: () => {
    const current = get().count; //get current count value only in this store
    set({ count: current * 3 });
  },
}));
export default usestore;

// increase ,decrease,double,tripple functions are added to modify the count value
// ==========================================

