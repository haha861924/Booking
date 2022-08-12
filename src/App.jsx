import React from "react";
import Checkout from "./components/Checkout";
import List from "./components/list";
import Search from "./components/Search";

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <div className="my-10 flex-grow">
        <Search />
        <List />
      </div>
      <Checkout />
    </div>
  );
}

export default App;
