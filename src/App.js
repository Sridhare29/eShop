import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import checkout from './components/checkout';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
          <Route path='/checkout'>
            <Header />
            <checkout/>
          </Route>    
        </Switch>
      </Router>
      <Header />
      <Home />
    </div>
  );
}

export default App;
