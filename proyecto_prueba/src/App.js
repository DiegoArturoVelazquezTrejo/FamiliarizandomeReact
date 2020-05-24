import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from "./Recipe"

const App = () =>{

  const AppID = "ec864dc0";
  const AppK  = "ea2289166397ef7ec075d03ae5ad2152";
  const example = `https://api.edamam.com/search?q=chicken&app_id=${AppID}&app_key=${AppK}`;

  const [recipes, setRecipes] = useState([]);
  const [search, setSeach] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect( () =>{
    getRecipies();
  }, [query]);

  const getRecipies = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${AppID}&app_key=${AppK}`);
      const data = await response.json();
      setRecipes(data.hits);
  };

  const updateSeach = e =>{
    setSeach(e.target.value);
    console.log(search);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSeach('');
  }

  return(
    <div className ="App">
      <form onSubmit = {getSearch} className="search-form">
          <input className="search-bar" type="text" value={search} onChange={updateSeach}/>
          <button className="search-button" type="submit">
            Search
          </button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image}
        ingredients = {recipe.recipe.ingredients}/>
      ))};
      </div>
    </div>
  );
};

export default App;
