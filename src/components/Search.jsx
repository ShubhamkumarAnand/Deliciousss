import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'

// This component stores the search for the app
function Search() {

  const [input, setInput] = useState("")
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    navigate('/searched/' + input)
  }
  return (
    <FormStyle onSubmit={ submitHandler }>
      <div>
        <FaSearch />
        <input
          onChange={ (e) => setInput(e.target.value) }
          type="text"
          value={ input } />
      </div>
    </FormStyle>
  )
}

// Styled Component
const FormStyle = styled.form`
  margin: 0rem 20rem;

  div{
    position: relative;
    width: 100%;
  }
  

  input {
    border: none;
    border-radius: 1rem;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    width: 100%;
    outline: none;
  }

  svg{
      position: absolute;
      top: 50%;
      left: 0%;
      transform: translate(100%, -50%);
      color: white;
  }
`
export default Search
