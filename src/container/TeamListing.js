import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTeams } from '../redux/actions/teamActions';
import TeamComponent from './TeamComponent';

const TeamListing = () => {
   const teams = useSelector((state) => state); 
   const dispatch = useDispatch();

   const fetchTeams = async () =>{
       const response = await axios
       .get("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain")
       .catch((err)=>{
           console.log(err);
       });
       dispatch(setTeams(response.data.teams));
    };
   
   useEffect(()=>{
       fetchTeams();
   },[]);
    return (
        <div className="ui grid container">
            <TeamComponent></TeamComponent>
        </div>
    );
};

export default TeamListing;