import React, { useEffect, useState } from "react";
import { mockdata } from "./mockData";
import { useStore } from "../store";
import { Utils } from "../utils";

function List() {
  const { foods, query, setList, setFood } = useStore();
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    mockdata().then((data) => {
      const newData = data.map((el) => {
        return { ...el, count: 0 };
      });
      setFilter(newData);
      setList(newData);
    });
  }, []);

  useEffect(() => {
    if (!query) {
      setFilter(foods);
      return;
    }

    const search = foods.filter(({ name, ingredients }) => {
      const nameFilter = Utils.include(name, query);
      const ingredientsFilter = Utils.include(ingredients.join(""), query);
      return nameFilter || ingredientsFilter;
    });
    setFilter(search);
  }, [query, foods]);

  const order = {
    add: (item) => {
      setFood({ ...item, count: item.count + 1 });
    },
    reduce: (item) => {
      if (item.count < 1) return;
      setFood({ ...item, count: item.count - 1 });
    },
    type: (e, item) => {
      setFood({ ...item, count: Number(item.count) + Number(e.target.value) });
    },
  };

  return (
    <>
      {filter.map((item, index) => (
        <div
          key={item.name}
          className="flex space-x-10 text-3xl border-b-4 border-gray-300 mt-5"
        >
          <img
            src={item.image}
            className="w-96 h-80 object-cover rounded mb-5 min-h-96"
          />

          <div className="flex-col space-y-5">
            <span className="font-bold">{item.name}</span>
            <p className="text-gray-400 text-2xl">
              {Utils.ingredients(item.ingredients)}
            </p>
            <div className="mt-80 flex-row space-x-20">
              <span>HK$ &nbsp;&nbsp; {Utils.dollars(item.price)}</span>
              <button onClick={() => order.reduce(item, index)}>-</button>
              <input
                value={item.count}
                onChange={(e) => order.type(e, item)}
                className="w-16 outline-3 border border-gray-500 px-2 py-2 text-center"
              />
              <button onClick={() => order.add(item, index)}>+</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default List;
