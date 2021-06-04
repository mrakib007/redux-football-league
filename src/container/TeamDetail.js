import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectedTeam } from '../redux/actions/teamActions';

const TeamDetail = () => {
    const team = useSelector((state)=> state.team);
    const {strTeamBadge,strTeam,strLeague,strCountry,strDescriptionEN} = team;
    const {idTeam} = useParams();
    const dispatch = useDispatch();
    console.log(team);
    
    const fetchTeamDetail = async () => {
        const response = await axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
        .catch((err)=>{
            console.log(err);
        });
        dispatch(selectedTeam(response.data.teams[0]));
    }
    useEffect(()=>{
        if(idTeam && idTeam !== "") fetchTeamDetail();
    },[])
    return (
        <div class = "ui grid container">
            {Object.keys(team).length === 0 ? (
                <div>Loading... </div>
            ) : 
            <div class= "ui placeholder segment">
                <div class="ui two column stackable center aligned grid">
                    <div class="ui vertical divider"></div>
                    <div class="middle aligned row">
                        <div class="column lp">
                            <img src={strTeamBadge} class="ui fluid image" alt="" />
                        </div>
                        <div class="column rp">
                            <h1>{strTeam}</h1>
                            <h2>
                                <a class="ui teal tag label"> </a>
                            </h2>
                            <h2>
                                <a>{strCountry}</a>
                            </h2>
                            <p>{strDescriptionEN}</p>
                        </div>
                    </div>
                </div>
            </div>            
            }
        </div>
    );
};

export default TeamDetail;