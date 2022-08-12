import { toString, countLength, flat } from "./utils";

export const Format = {
  dollars: (price) => toString(price).padEnd(countLength(price) + 3, ".00"),
  ingredients: (arr) => {
    const len = arr.length;
    if (len >= 3) {
      return arr[0]
        .concat(", ")
        .concat(flat(arr.slice(1, countLength(arr)), " & "));
    }
    if (len >= 2) {
      return flat(arr, " & ");
    }
    return flat(arr);
  },
};
