
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ItalianRecipes from './components/ItalianRecipes.js';
import Navbar from './components/Navbar.js';
import IndianRecipes from './components/IndianRecipes.js';
import MexicanRecipes from './components/MexicanRecipes.js';
import ThaiRecipes from './components/ThaiRecipes.js';





const App = () =>{
const [selectedCuisine, setSelectedCuisine] = useState('italian');

const handleCuisineChange = (cuisine) => {
  setSelectedCuisine(cuisine); //we get this easily
}; //this goes to navbar now

let selectedRecipesComponent;
switch (selectedCuisine) {
  case 'italian':
    selectedRecipesComponent = <ItalianRecipes />;
    break;
  case 'mexican':
    selectedRecipesComponent = <MexicanRecipes />;
    break;
  case 'indian':
    selectedRecipesComponent = <IndianRecipes />;
    break;
  case 'thai':
    selectedRecipesComponent = <ThaiRecipes />;
    break;
  default:
    selectedRecipesComponent = null;
}

return (
  <Router>
  <div className="App">
    <Navbar selectedCuisine={selectedCuisine} onCuisineChange={handleCuisineChange} />

    {selectedRecipesComponent}
  </div>
  </Router>
);

}

export default App;
