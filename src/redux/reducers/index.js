import {combineReducers} from 'redux';
import {teamReducer,selectedTeamReducer} from './teamReducer';

const reducers = combineReducers({
    allTeams: teamReducer,
    team: selectedTeamReducer,
});

export default reducers;