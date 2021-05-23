import React,{useState,useContext,useEffect} from "react"
import {View,StyleSheet,TouchableOpacity} from "react-native"
import {Text,Button,Input} from "react-native-elements"
import Spacer from "../components/Spacer"
import {Context as AuthContext} from "../context/AuthContext"
import AuthForm from "../components/AuthForm"
import NavLink from "../components/NavLink"
import {NavigationEvents} from "react-navigation"

const SignupScreen = ({navigation}) => {

   
    const {state,signup,clearErrorMessage} = useContext(AuthContext)

    return (
        <View style={styles.container}>
        <NavigationEvents 
             onWillFocus={clearErrorMessage}
         />
         <AuthForm 
             headerText="Sign Up for Tracker"
             errorMessage={state.errorMessage}
             submitButtonText="Sign Up"
             onSubmit={signup}
         />
          <NavLink 
              text="Already have an account ? Signin instead"
              routeName="Signin"
          />
        </View>
    )
}

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 100
    },
    link: {
        color: "blue"
    }
})

export default SignupScreen;