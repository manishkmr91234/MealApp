import React, {useState} from 'react'
import Card from './Card'
const MainPage = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState("");
  const [message, setmessage] = useState("")

  function handleInput(e){
      setSearch(e.target.value);
  }
  const myFun = async () => {
    if(search == ""){
      setmessage("Kindly Enter SomeThings")
    }
    else{
      const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      let res = await get.json()
      setData(res.meals)
    }
    
  }
  // console.log(data);
  return (
    <>
    <h1 className='head'>Food Meal App</h1>
    <div className='container'>
      <div className='searchBar'>
        <input type='text' placeholder='Enter Food' onChange={handleInput}/>
        <button onClick={myFun}>Search</button>

      </div>
      <h4 className='msg'>{message}</h4>
      <div>
        <Card detail={data}/>
      </div>
    </div>
      
      </>
    
  )
}

export default MainPage
