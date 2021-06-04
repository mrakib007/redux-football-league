import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TeamComponent = () => {
  const teams = useSelector((state) => state.allTeams.teams);
  const renderList = teams.map((team) => {
    const { strTeam, idTeam, strAlternative, strLeague, strTeamBadge } = team;
    return (
      <div className="padding-between">
          <Link to= {`/team/${idTeam}`}>
      <div class="ui link card">
        <div class="image">
          <img src={strTeamBadge} />
        </div>
        <div class="content">
          <a class="header">{strTeam}</a>
          <div class="description">
           {strLeague}
          </div>
        </div>
        <div class="extra content">
          <a>
            <i class="user icon"></i>
            
          </a>
        </div>
      </div>
      </Link>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default TeamComponent;
