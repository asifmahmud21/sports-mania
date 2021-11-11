import React, { useEffect, useState } from 'react';
import Leagues from '../Leagues/Leagues';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';


const Home = () => {
    const [league, setLeague] = useState([]);
    

  useEffect(() => {
      fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
      .then(res => res.json())
      .then(data => setLeague(data.leagues.slice(0, 9)))
      .catch(err =>console.error(err))
  }, [])
  
    return (
        <div>
            <div className="header-container">
                <h2>Sports Mania</h2>
            </div>
                <div className="leagues-container">
                    {
                    league.map(list => <Leagues leagueList={list}></Leagues>)
                    
                }
                </div>
            
        </div>
    );
};

export default Home;