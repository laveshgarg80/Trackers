import React from "react"
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
 
import AccountScreen from "./src/Screens/AccountScreen"
import SigninScreen from "./src/Screens/SigninScreen"
import SignupScreen from "./src/Screens/SignupScreen"
import TrackCreateScreen from "./src/Screens/TrackCreateScreen"
import TrackDeatilScreen from "./src/Screens/TrackDetailScreen"
import TrackListScreen from "./src/Screens/TrackListScreen"
import {Provider as AuthProvider} from "./src/context/AuthContext"
import {setNavigator} from "./src/navigationRef"
import ResolveAuthScreen from "./src/Screens/ResolveAuthScreen"
import {Provider as LocationProvider} from "./src/context/LocationContext"
import {Provider as TrackProvider} from "./src/context/TrackContext"

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFLow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListFLow: createStackNavigator({
      TrackList: TrackListScreen, 
      TrackDetail: TrackDeatilScreen
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen
  })
})

const App = createAppContainer(switchNavigator)

export default () => {
  return (
    <TrackProvider>
    <LocationProvider>
    <AuthProvider>
      <App ref={(navigator) => {setNavigator(navigator)}}/>
    </AuthProvider>
    </LocationProvider>
    </TrackProvider>
  )
}