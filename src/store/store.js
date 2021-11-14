import React from "react";
import { useReducer } from "react";

export const StoreContext = React.createContext({users: [], availableReactions: [], usersReactions: [], getAllUsers: ()=>{}, getAllReactions: ()=> {}, getAllUsersReactions: ()=> {}});




export const Provider = (props) => {

    const defaultState = {users: [], availableReactions: [], usersReactions: [], isLoading: false};

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

        } else if (action.type === "LOADING") {
            let loading = state.isLoading;
            return {
                ...state, isLoading: !loading
            }
        }
        else if(action.type === "DELETE_REACTION") {
            let reactions = state.usersReactions;
            reactions = reactions.filter(reaction => reaction.id !== action.id);
            return {
                ...state, usersReactions: reactions
            }
        }
        return defaultState;
    }
    const [appState, appStateDispatcher ] = useReducer(stateReducer, defaultState);
   

    const getAllUsers = async () => {
        try {
            appStateDispatcher({type: "LOADING"});
        const response = await fetch("https://artful-iudex.herokuapp.com/users");
        const responseData = await response.json();
        if(response.ok) {
            appStateDispatcher({type:"SET_USERS", users: responseData}); 
            appStateDispatcher({type: "LOADING"});
        }
            
        } catch (error) {
                console.log("error while fetching users");
        }
        
    }
    
    const getAllReactions = async () => {
        try {
            appStateDispatcher({type: "LOADING"});
        const response = await fetch("https://artful-iudex.herokuapp.com/reactions");
        const responseData = await response.json();
        if(response.ok){
            appStateDispatcher({type:"SET_REACTIONS", reactions: responseData});
            appStateDispatcher({type: "LOADING"});
        }
            
        } catch (error) {
            console.log("error while fetching all reactions");
        }
        
       
    }
    
    const getAllUsersReactions = async () => {
        try {
            appStateDispatcher({type: "LOADING"});
            const response = await fetch("https://artful-iudex.herokuapp.com/user_content_reactions");
            const responseData = await response.json();
            if(response.ok){
                appStateDispatcher({type: "USERS_REACTIONS", reactions: responseData});
                appStateDispatcher({type: "LOADING"});
            }
            
        } catch (error) {
            console.log("error while fetching users reactions");
            
        }
       
      
    }

    const addReaction = async (data) => {
        try {
            appStateDispatcher({type: "LOADING"});
            const response = await fetch("https://artful-iudex.herokuapp.com/user_content_reactions", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)            
            });
            const responseData = await response.json();
           
            if(response.ok) {
                data = {...data, id: responseData.id };
                appStateDispatcher({type: "ADD_REACTION", reaction: data});
                appStateDispatcher({type: "LOADING"});
            }

        } catch (e) {
            console.log("error while adding a reaction")
        }
       
    }
    const removeReaction = async (id) => {
       try {
        appStateDispatcher({type: "LOADING"});
        const response = await fetch(`https://artful-iudex.herokuapp.com/user_content_reactions/${id}`, {
            method: "DELETE"
        });
       
        if(response.ok) {
            appStateDispatcher({type: "DELETE_REACTION", id: id});
            appStateDispatcher({type: "LOADING"});            
        }

       } catch(e) {
           console.log("error while deleting the reaction");
       }
       
    }

    let storeContext = {
        isLoading: appState.isLoading,
        users: appState.users,
        availableReactions: appState.availableReactions,
        usersReactions: appState.usersReactions,
        getAllUsers,
        getAllReactions,
        getAllUsersReactions,
        addReaction,
        removeReaction
    }

    return <StoreContext.Provider value={storeContext}>{props.children}</StoreContext.Provider>
}