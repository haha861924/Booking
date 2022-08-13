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
    <div className="group pb-40 w-full">
      {filter.map((item, index) => (
        <div
          key={item.name}
          className="flex space-x-5 lg:text-3xl text-lg border-b-4 last:border-b-0 border-gray-300 py-3 w-full"
        >
          <img
            src={item.image}
            className="w-96 h-96 object-cover rounded flex-none max-w-[7rem] max-h-28"
          />

          <div className="flex flex-col space-y-5 flex-1 min-w-0">
            <div className="flex-1">
              <span className="font-bold">{item.name}</span>
              <p className="text-gray-400 lg:text-2xl text-base overflow-ellipsis overflow-hidden whitespace-nowrap">
                {Utils.ingredients(item.ingredients)}
              </p>
            </div>
            <div className="mt-80 flex flex-row flex-none min-w-0 items-center pb-3">
              <div className="flex-1">
                <span>HK$ &nbsp;&nbsp; {Utils.dollars(item.price)}</span>
              </div>
              <div className="flex-none flex items-center">
                <button className="w-8 h-8 bg-yellow-400 flex-none text-white font-bold rounded-full" onClick={() => order.reduce(item, index)}>-</button>
                <input
                  value={item.count}
                  onChange={(e) => order.type(e, item)}
                  className="w-8 h-8 outline-3 border border-gray-500 p-0 text-center mx-1"
                />
                <button className=" w-8 h-8 bg-yellow-400 flex-none text-white font-bold rounded-full" onClick={() => order.add(item, index)}>+</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
