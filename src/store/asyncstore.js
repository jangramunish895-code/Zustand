import { create } from 'zustand';

const useAsyncStore = create((set) => ({
count:0,
increment : async()=>{
        console.log("Incrementing after 2 seconds...");
    const promise = new Promise((resolve) => {
    setTimeout(resolve, 2000);
});
await promise;
set((state)=>({count:state.count+1}))
console.log("Incremented!");
},
}));
export default useAsyncStore;