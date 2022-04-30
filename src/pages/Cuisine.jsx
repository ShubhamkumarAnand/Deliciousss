import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'

function Cuisine() {

  // Storing the state of the component
  const [cuisine, setCuisine] = useState([])

  // storing the current parameters
  const params = useParams()

  // only run this when the parameters changes in the app
  useEffect(() => {
    getCuisine(params.type)
  }, [params.type])

  // API function to get the random data 
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

// Styled component for the component
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
