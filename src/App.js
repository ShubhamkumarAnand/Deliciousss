import Category from './components/Category';
import Pages from './pages/Pages';
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <h1>Hello Chef!!</h1>
      <BrowserRouter>
        <Category />
        <Pages /> 
      </BrowserRouter>
    </div>
  );
}

export default App;
