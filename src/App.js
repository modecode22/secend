import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Title from "./components/Title";
import Categories from "./components/Categories";
import Output from "./components/Output";
import { items } from "./data";



function App() {
  const [itemsData, setItemsData] = useState(items);
  //this for making the category
  const allCategories = ["الكل", ...new Set(items.map((i) => i.category))];
  console.log(allCategories);
  //filter by category
  const filterByCategories = (aa) => {
    if (aa === "الكل") {
      setItemsData(items);
    } else {
      const newCategories = items.filter((item) => item.category === aa);
      setItemsData(newCategories);
    }
  };

  //filter by search
  const filterBySearch = (word) => {
    if (word !== "") {
      const newSearch = items.filter((item) => item.title === word);
      setItemsData(newSearch);
    }
  };

  return (
    <div className="bg-slate-100 h-full w-full ">
      <NavBar filterBySearch={filterBySearch} />
      <Title />
      <Categories
        allCategories={allCategories}
        filterByCategories={filterByCategories}
      />
      <Output key={itemsData} itemsData={itemsData} />
    </div>
  );
}

export default App;
