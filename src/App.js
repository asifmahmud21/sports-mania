
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import LeaguesDetails from './Component/LeaguesDetails/LeaguesDetails';


function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route exact path="/" element={ <Home />} />
        </Routes>
        <Routes>
          <Route path="/leagueDetails/:idLeague" element={ <LeaguesDetails/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
