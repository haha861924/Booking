import React from "react";
import Checkout from "./components/Checkout";
import List from "./components/List";
import Search from "./components/Search";

function App() {
  return (
    <div className="flex flex-col w-screen h-screen justify-between">
      <div className="flex-grow pt-7 px-7 flex flex-col justify-center w-full">
        <Search />
        <List />
      </div>
      <Checkout />
    </div>
  );
}

export default App;
