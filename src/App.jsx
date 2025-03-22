import React from 'react';
import MainPage from './components/MainPage';
import { Routes, Route} from 'react-router-dom';
import RecipeInfo from './components/RecipeInfo';
const App = () => {
  return (
   <>
   <Routes>
    <Route path='/' element={<MainPage/>}/>
    <Route path='/:mealid' element={<RecipeInfo/>}/>
   </Routes>
 
  
   
   </>
    
  );
};

export default App;
