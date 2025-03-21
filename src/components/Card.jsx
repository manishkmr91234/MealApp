import React from 'react'

const Card = ({detail}) => {
    console.log(detail)
  return (
    <div className='meals'>
    {!detail ? "" :
    detail.map((curItem)=>{
        return(
        <div className='mealImg'>
        <img src={curItem.strMealThumb}/>
        <p>{curItem.strMeal}</p>
        <button>Recipe</button>
        </div>
        )
    })
    }
    </div>
  )
}

export default Card
