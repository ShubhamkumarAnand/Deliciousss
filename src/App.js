import Category from './components/Category';
import Pages from './pages/Pages';
import { Link, BrowserRouter } from 'react-router-dom'
import Search from './components/Search';
import styled from 'styled-components'
import { GiKnifeFork } from 'react-icons/gi'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav >
          <GiKnifeFork />
          <Logo to={ '/' }>Deliciousss</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

// Styled component
const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
  margin-right: 1rem;
`

const Nav = styled.div`
  padding: 2rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;

  svg{
    font-size: 2rem;
  }
`
export default App;
