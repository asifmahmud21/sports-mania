import React from 'react';
import { Link } from 'react-router-dom';
import './Leagues.css'

const Leagues = (props) => {
    const {idLeague, strSport, strLeague} = props.leagueList;
    return (
        <div className="league-container">
            <h4>{strLeague}</h4>
            <p><small>Sports Type: {strSport}</small></p>
            <button className="btn btn-primary"><Link to={`leagueDetails/${idLeague}`}>Explore</Link> </button>
        </div>
    );
};

export default Leagues;