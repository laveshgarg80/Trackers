import React from "react"
import {AsyncStorage} from "react-native"
import createDataContext from "./createDataContext"
import trackApi from "../api/trackers"
import {navigate} from "../navigationRef"

const authReducer = (state,action) => {
    switch (action.type) {
        case "add_error":
            return {...state,errorMessage: action.payload}
        case "signup":
            return {errorMessage: "",token: action.payload}
        case "clear_error_message":
            return {...state,errorMessage: ""}
        case "signout":
            return {token: null,errorMessage: ""}                    
        default:
            return state;
    }
}

const tryLocalSignin = (dispatch) => {
    return async() => {
        const token =  await AsyncStorage.getItem("token")
        if(token){
          dispatch({type: "signup",payload: token})
          navigate("TrackList")
        }
        else{
            navigate("Signup")
        }
    }
}

const signup = (dispatch) => {
    return async({email,password}) => {
       try {
           const response = await trackApi.post("/signup",{email,password})
           await AsyncStorage.setItem("token",response.data.token)
           dispatch({type: "signup",payload: response.data.token})
           navigate("TrackList")
           console.log(response.data)           
       } catch (error) {
           console.log(error)
           dispatch({type: "add_error",payload: "Something went wrong with the signup"})
       }
    }
}

const signin = (dispatch) => {
    return async({email,password}) => {
        try {
            const response = await trackApi.post("/signin",{email,password})
            await AsyncStorage.setItem("token",response.data.token)
            dispatch({type: "signup",payload: response.data.token})
            navigate("TrackList")
            console.log(response.data)           
        } catch (error) {
            console.log(error)
            dispatch({type: "add_error",payload: "Something went wrong with the signin"})
        }
    }
}

const signout = (dispatch) => {
    return async() => {
       await AsyncStorage.removeItem("token")
       dispatch({type: "signout"})
       navigate("Signup")
    }
}

const clearErrorMessage = (dispatch) => () => {
        dispatch({type: "clear_error_message"})
    
   
}

export const {Context,Provider} = createDataContext(
    authReducer,
    {signin,signup,signout,clearErrorMessage,tryLocalSignin},
    {token: null,errorMessage: ""}
)