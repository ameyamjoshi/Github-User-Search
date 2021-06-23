import logo from './logo.svg';
import './App.css';
import User from "./User"
import SearchData from "./SearchData"
function App() {
  return (
    <div className="App">
      <h2>Github Users Data using Api</h2> 
      <SearchData/>
    <User/>
    </div>
  );
}

export default App;
