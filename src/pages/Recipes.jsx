import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'


function Recipes() {

  // State for the component
  const [details, setDetails] = useState([])

  // By default keep it to the instruction button on loading
  const [activeTab, setActiveTab] = useState('instructions')

  // Storing current parameter
  let params = useParams()

  // Fetching the data from the API
  const getRecipe = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const detailData = await api.json()
    setDetails(detailData)
  }

  useEffect(() => {
    getRecipe(params.name)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.name])

  return (
    <DetailWrapper>
      <div>
        <h4>{ details.title }</h4>
        <img src={ details.image } alt="" />
      </div>
      <Info>
        <Button
          className={ activeTab === 'instructions' ? 'active' : '' }
          onClick={ () => setActiveTab('instructions') }
        >Instructions</Button>
        <Button
          className={ activeTab === 'ingredients' ? 'active' : '' }
          onClick={ () => setActiveTab('ingredients') }
        >Ingredients</Button>
        { activeTab === 'instructions' && (
          <div>
            <h3 dangerouslySetInnerHTML={ { __html: details.summary } }></h3>
            <h3 dangerouslySetInnerHTML={ { __html: details.instructions } }></h3>
          </div>
        )}
        { activeTab === 'ingredients' && (
          <ul>
            { details.extendedIngredients.map((ingredient) => (
              <li key={ ingredient.id }>{ ingredient.original }</li>
            )) }
          </ul>
        )}
        
      </Info>
    </DetailWrapper>
  )
}

// Styled Component
const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;

  .active{
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  h4{
    margin-bottom: 2rem;
  }

  li{
    font-size: 1.22rem;
    line-height: 2.5rem;
  }

  ul{
    margin-top: 2rem;
  }
`

const Button = styled.button`
  background: white;
  padding: 1rem 2rem;
  color: #313131;
  margin-right: 2rem;
  font-weight: 600;
  border: 2px solid black;
`

const Info = styled.div`
  margin-left: 10rem;
`

export default Recipes
