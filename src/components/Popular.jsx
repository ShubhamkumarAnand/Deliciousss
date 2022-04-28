import { useEffect, useState } from 'react';
import style from 'styled-components';

function Popular() {

  const [popular, setPopular] = useState([])

  // Run the getPopular function when the component get mounted
  useEffect(() => { 
    getPopular()
  },[])

  const getPopular = async() =>{
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
    const data = await api.json()
    setPopular(data.recipes)
  }
  
  return (
    <div>
      { popular.map((recipe) => {
        return (
          <div key={recipe.id}>
            <p>{recipe.title}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Popular
