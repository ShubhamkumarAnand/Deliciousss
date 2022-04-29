import style from 'styled-components'
import {Link, useParams} from 'react-router-dom'
import { motion } from 'framer-motion'
import {useState, useEffect} from 'react'

function Cuisine() {
  const [cuisine, setCuisine] = useState([])
  
  const params = useParams()
  useEffect(() => {
    getCuisine(params.type)
  }, [params.type])

  const getCuisine = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
    const recipes = await data.json()
    setCuisine(recipes.results)

  }
  
  return (
    <div>Cuisine</div>
  )
}

export default Cuisine
