import React,{useState,useEffect,useContext,useCallback} from "react"
import {View,StyleSheet} from "react-native"
import {Text} from "react-native-elements"
import Map from "../components/Map"
import {withNavigationFocus} from "react-navigation"
import {SafeAreaView} from "react-native-safe-area-context"
import "../_mockLocation"
import {Context as LocationContext} from "../context/LocationContext"
import useLocation from "../hooks/useLocation"
import TrackForm from "../components/TrackForm"
import {FontAwesome} from "@expo/vector-icons"

const TrackCreateScreen = ({isFocused}) => {
    const {state: {recording},addLocation} = useContext(LocationContext)
    const callback = useCallback((location) => addLocation(location,recording),[recording])
    const [err] = useLocation(isFocused || recording,callback)


   
    return (
        <SafeAreaView forceInset={{top : "always"}}>
            <Text h3>Create a Track</Text>
            <Map />
            {err ? <Text>please enable permissions</Text> : null}
            <TrackForm />
        </SafeAreaView>
    )
}

TrackCreateScreen.navigationOptions = {
    title: "Add",
    tabBarIcon: <FontAwesome name="plus" fontSize={20}/>
}

const styles = StyleSheet.create({})

export default withNavigationFocus(TrackCreateScreen);