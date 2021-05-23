import React,{useContext} from "react"
import {Text,View,StyleSheet} from "react-native"
import { State } from "react-native-gesture-handler"
import AuthForm from "../components/AuthForm"
import NavLink from "../components/NavLink"
import {NavigationEvents} from "react-navigation"
import {Context as AuthContext} from "../context/AuthContext"

const SigninScreen = () => {

   const {state,signin,clearErrorMessage} = useContext(AuthContext)

    return (
        <View style={styles.container}>
         <NavigationEvents 
             onWillFocus={clearErrorMessage}
         />
           <AuthForm 
               headerText="Signin for Tracker"
               submitButtonText="Sign In"
               onSubmit={signin}
               errorMessage={state.errorMessage}
           />
           <NavLink 
               text="Does not have an account ? Signup instead"
               routeName="Signup"
           />
        </View>
    )
}

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom:100
    }
})

export default SigninScreen;