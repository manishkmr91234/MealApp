import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const RecipeInfo = () => {
    const [info, setInfo] = useState()
    const {mealid} = useParams();
    //console.log(mealid)
    const getrecipe = async () => {
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
        const jsonData = await get.json();
        //console.log(jsonData.meals[0]);
        setInfo(jsonData.meals[0])
    }
    if(info != ""){
        getrecipe()
    }
  return (
  <div>
    
        {!info ? "Dataa not found" : 
        <div className='mealInfo'>
        <img src={info.strMealThumb}/>
        <div className='info'>
            <h1>Recipe Detail</h1>
            <button>{info.strMeal}</button>
            <h3>Instruction's</h3>
            <p>{info.strInstructions}</p>
        </div>
      </div>
    }
  </div>
  )
}

export default RecipeInfo
