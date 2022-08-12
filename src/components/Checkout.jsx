import React, { useState, useEffect } from "react";
import { useStore } from "../store";
import { Utils } from "../utils";

function Checkout() {
  const { query, foods } = useStore();
  const [cost, setCost] = useState(0);

  useEffect(() => {
    const sum = foods.reduce((pre, curr) => pre + curr.count * curr.price, 0);
    setCost(sum);
  }, [foods]);

  return (
    <>
      {!query && (
        <button className="fixed bottom-0 left-0 z-20 w-full bg-yellow-400 p-8 text-white text-3xl hover:bg-yellow-200 hover:text-gray-700">
          Checkout {!!cost && <span>(HK$ {Utils.dollars(cost)})</span>}
        </button>
      )}
    </>
  );
}

export default Checkout;
