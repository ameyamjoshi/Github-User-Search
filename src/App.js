import logo from "./logo.svg";
import "./App.css";
import User from "./User";
import SearchData from "./SearchData";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter> 
     <Switch>
        <Route path="/" component={User} exact />
        <Route path="/searchuser" component={SearchData} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
