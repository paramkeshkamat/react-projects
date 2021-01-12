import React from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <div className="Home">
      <SearchForm />
      <CocktailList />
    </div>
  );
};

export default Home;
