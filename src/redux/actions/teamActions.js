import {ActionTypes} from "../constants/action-types";
import firebaseConfig from "./firebase.config";
import firebase from "firebase/app";


if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig)
}
export const setTeams = (teams) => {
    return {
        type: ActionTypes.SET_TEAMS,
        payload: teams,
    }
}

export const selectedTeam = (team) => {
    return {
        type: ActionTypes.SELECTED_TEAM,
        payload: team,
    }
}