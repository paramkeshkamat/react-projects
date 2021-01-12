import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import "../styles/Cocktails.css";
import axios from "axios";
import Loading from "../components/Loading";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const Cocktails = () => {
  const { id } = useParams();
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [cocktail, setCocktail] = useState({});

  useEffect(() => {
    setLoading(true);
    const fetchItem = async () => {
      try {
        const response = await axios.get(`${url}${id}`);
        const { drinks } = response.data;

        if (drinks) {
          const {
            strDrink: name,
            strCategory: category,
            strAlcoholic: info,
            strGlass: glass,
            strDrinkThumb: image,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
          } = drinks[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
          ];

          const newCocktail = {
            name,
            category,
            info,
            glass,
            image,
            instructions,
            ingredients,
          };

          setCocktail(newCocktail);
        } else {
          setCocktail({});
        }
      } catch (error) {
        console.log(error);
        history.push("/error");
      }
      setLoading(false);
    };

    fetchItem();
  }, [history, id]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="Cocktails">
      <button onClick={() => history.push("/")}>Go back to Home</button>
      <h1 className="title">{cocktail.name}</h1>
      <div className="cocktail-info">
        <div className="image-container">
          <img src={cocktail.image} alt={cocktail.name} />
        </div>
        <div className="cocktail-text">
          <p>
            <span className="drink-data">name :</span> {cocktail.name}
          </p>
          <p>
            <span className="drink-data">category :</span> {cocktail.category}
          </p>
          <p>
            <span className="drink-data">info :</span> {cocktail.info}
          </p>
          <p>
            <span className="drink-data">glass :</span> {cocktail.glass}
          </p>
          <p>
            <span className="drink-data">instructons :</span>
            {cocktail.instructions}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            {cocktail.ingredients.map((item, index) => {
              return <span key={index}> {item}</span>;
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cocktails;
