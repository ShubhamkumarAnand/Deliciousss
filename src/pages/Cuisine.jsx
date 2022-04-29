import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

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

    <Grid
      animate={ { opacity: 1 } }
      initial={ { opacity: 0 } }
      exit={ { opacity: 0 } }
      transition={ { duration: 0.5 } }
    >
      { cuisine.map((item) => {
        return (
          <Link to={ "/recipe/" + item.id }>
            <Card key={ item.id }>
              <img src={ item.image } alt="" />
              <h4>{ item.title }</h4>
            </Card>
          </Link>
        )
      }) }
    </Grid>
  )
}

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`

const Card = styled.div`
  img{
   border-radius: 2rem;
   width: 100%;
  }

  a{
    text-decoration: none;
  }

  h4{
    text-align: center;
    padding: 1rem;
  }
`

export default Cuisine
