import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './LeaguesDetails.css';
import Male from '../../images/male.png'
import Female from '../../images/female.png'
import Facebook from '../../images/Facebook.png'
import Youtube from '../../images/YouTube.png'
import Twitter from '../../images/Twitter.png'

const LeaguesDetails = () => {
    const {idLeague} = useParams()
    const [league, setLeague] = useState([])

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
            .then(res => res.json())
            .then(data => setLeague(data.leagues[0]))
    }, [idLeague])


    const { strDescriptionEN, strDescriptionFR, strCountry, strLeague, dateFirstEvent,
        strGender, strTwitter, strYoutube, strFacebook, strLogo, strSport, strBanner} = league

        let gender;
        if (strGender === "Male") {
            gender = Male
        } else if (strGender === "Female") {
            gender = Female
        }    

    return (
        <div>
            <div className="leagueLogo" style={{backgroundImage:`url(${strBanner})`,height:'300px'}}>
                <img src={strLogo} alt=""/>
             </div>
             <div className="allLeagueDetail my-3 row">
                <div className="leagueDetail col-md-6">
                    <h4>{strLeague}</h4>
                    <p>Founded: {dateFirstEvent}</p>
                    <p>Country:{strCountry}</p>
                    <p>Sports type: {strSport}</p>
                    <p>Gender: {strGender}</p>
                </div>
                
                <div className="leagueImg col-md-6">
                <img src={gender} alt=""/>
                </div>
            </div>
            <div className="description">
            <p>{strDescriptionEN}</p>
            <br/>
              <p>{strDescriptionFR}</p>
            </div>
              <div className="social-media-link d-flex justify-content-center">
                        <div>
                            <a href={"https://" + strFacebook} target="_blank"rel="noreferrer"> <img src={Facebook} alt="" /> </a>
                            <a href={"https://" + strYoutube} target="_blank" rel="noreferrer" > <img src={Youtube} alt="" /> </a>
                            <a href={"https://" + strTwitter} target="_blank"rel="noreferrer"> <img src={Twitter} alt="" /> </a>
                            </div>
                </div>   
        </div>
    );
};

export default LeaguesDetails;