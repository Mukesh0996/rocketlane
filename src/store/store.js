import React from "react";
import { useReducer } from "react";

export const StoreContext = React.createContext({users: [], availableReactions: [], usersReactions: [], getAllUsers: ()=>{}, getAllReactions: ()=> {}, getAllUsersReactions: ()=> {}});




export const Provider = (props) => {

    const defaultState = {users: [], availableReactions: [], usersReactions: []};

    const stateReducer = (state, action) => {

        if(action.type === "SET_USERS") {
            return {
                ...state, users: action.users
            }
        }  else if(action.type === "SET_REACTIONS") {
            return {
                ...state, availableReactions : action.reactions
            }
        } else if (action.type === "USERS_REACTIONS") {
            return {
                ...state, usersReactions : action.reactions
            }
        } else if (action.type === "ADD_REACTION") {
            let reactions = state.usersReactions;
            reactions = [...reactions, action.reaction]
            return {
                ...state, usersReactions: reactions
            }

        }
         else if (action.type === "ERROR") {
            return {
                ...state, error: { message: action.message }
            }
        }
        return defaultState;
    }
    const [appState, appStateDispatcher ] = useReducer(stateReducer, defaultState);
   

    const getAllUsers = async () => {
        const response = await fetch("https://artful-iudex.herokuapp.com/users");
        const responseData = await response.json();
        console.log(response.ok);
        appStateDispatcher({type:"SET_USERS", users: responseData});
    }
    
    const getAllReactions = async () => {
        const response = await fetch("https://artful-iudex.herokuapp.com/reactions");
        const responseData = await response.json();
        appStateDispatcher({type:"SET_REACTIONS", reactions: responseData});
    }
    
    const getAllUsersReactions = async () => {
        const response = await fetch("https://artful-iudex.herokuapp.com/user_content_reactions");
        const responseData = await response.json();
        appStateDispatcher({type: "USERS_REACTIONS", reactions: responseData});
    }

    const addReaction = (data) => {
        appStateDispatcher({type: "ADD_REACTION", reaction: data})
    }


    let storeContext = {
        users: appState.users,
        availableReactions: appState.availableReactions,
        usersReactions: appState.usersReactions,
        getAllUsers,
        getAllReactions,
        getAllUsersReactions,
        addReaction
    }

    return <StoreContext.Provider value={storeContext}>{props.children}</StoreContext.Provider>
}