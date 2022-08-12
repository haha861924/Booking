import create from "zustand";
import { devtools } from "zustand/middleware";

const state = {
  foods: [],
  query: "",
  count: 0,
};

const action = (set) => ({
  ...state,
  setList: (items) => {
    return set(() => {
      return {
        foods: items,
      };
    });
  },
  setFood: (item) => {
    return set((state) => {
      return {
        foods: state.foods.map((o) => (o.name === item.name ? item : o)),
      };
    });
  },
  setQuery: (query) => {
    set(() => ({
      query: query,
    }));
  },
});

export const useStore = create(devtools(action));
