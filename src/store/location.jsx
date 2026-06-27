import {create} from "zustand";
import {immer} from "zustand/middleware/immer";
import {locations} from "#constants";

const DEFAULT_LOCATION = location.work;
const useLoactionStore = create(immer((set)=>({
activeLoaction: locations.work;

setActiveLoaction:(loaction=null)=>set((state)=>{
    state.activeLoaction = loaction;
}),
    resetActiveLoaction:()=>set((state)=>{
        state.activeLoaction = DEFAULT_LOCATION;
    })
})));