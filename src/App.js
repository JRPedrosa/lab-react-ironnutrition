import logo from './logo.svg';
import './App.css';
import foodsJSON from "./foods.json";
import React, { useState } from "react";
import FoodBox from "./FoodBox";
import AddFoodForm from './AddFoodForm';
import Search from './Search';



function App() {

  const [foods, setFoods] = useState(foodsJSON);
  const [filteredFoods, setFilteredFoods] = useState(foodsJSON);


  const addFood = (newFood) => {
    setFoods([...foods, newFood]);
  };

  const deleteFood = (name) => {
    setFoods(foods.filter((food) => food.name !== name));  
  };

  const [showForm, setShowForm] = useState(true);

  const hideForm = () => {
    setShowForm(!showForm);
}

  const filterFood = (search) => {
    console.log(search);
    setFilteredFoods(foods.filter((food) => food.name.includes(search))); 
  }

  return (

    <div className="App">

        <h2>Add Food Entry</h2>
        <button onClick={hideForm}>
            {showForm ? "Hide Form" : "Add New Food"}
        </button>

        {showForm ? <AddFoodForm  bananas={addFood} /> : "" }

        
        <Search searchFood={filterFood} />

        <h2>Food List</h2>

        {!filteredFoods.length && <h1>"NO FOOD LEFT"</h1>  }

          {filteredFoods.map((food) => {
            return (
              <div>
                {/* <p>{food.name}</p>
                <img src={food.image} width="200" alt={food.name} /> */}
                <FoodBox food={food} deleteOneFood={deleteFood}/>
              </div>
              
            )
          })}

          
      
    </div>
  );
}

export default App;
