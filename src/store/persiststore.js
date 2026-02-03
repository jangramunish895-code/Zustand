import {create } from 'zustand';
import { persist } from 'zustand/middleware';

const usePersistStore = create(
  persist(
    //persist is used after create and before get,set so this is named as middleware 
    (set) => ({
        count: 0,
        increase: () => {set((state) => ({ count: state.count + 1 }));
                    console.log("✅ State updated. Check Application → Local Storage");
    },
        decrease: () => {set((state) => ({ count: state.count - 1 }));
                    console.log("✅ State updated. Check Application → Local Storage");             
    },
        
    }),
    {
      name: 'persisted-storage', // unique name
    //   storage: createJSONStorage(() => sessionStorage),  // default is localStorage, this is for sessionStorage
    }
  )
);
export default usePersistStore;
