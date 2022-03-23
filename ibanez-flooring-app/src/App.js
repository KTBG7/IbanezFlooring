import './App.css';
import Home from './pages/Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router> 
  );
}

export default App;
