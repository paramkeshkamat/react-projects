import React, { useContext } from "react";
import { AppContext } from "../context";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import "../styles/CocktailList.css";

const CocktailList = () => {
  const { loading, cocktails } = useContext(AppContext);

  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return (
      <div className="cocktail-error">
        <h3>no cocktails matched your search criteria...</h3>
      </div>
    );
  }

  return (
    <div>
      <h1 className="heading">Cocktails</h1>
      <div className="CocktailList">
        {cocktails.map((cocktail) => {
          return <Cocktail key={cocktail.id} {...cocktail} />;
        })}
      </div>
    </div>
  );
};

export default CocktailList;
