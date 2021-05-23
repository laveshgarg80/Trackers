import React,{useContext} from "react"
import {Text,TouchableOpacity,StyleSheet,FlatList} from "react-native"
import {NavigationEvents} from "react-navigation"
import {Context as TrackContext} from "../context/TrackContext"
import {ListItem} from "react-native-elements"

const TrackListScreen = ({navigation}) => {
    const {state,fetchTracks} = useContext(TrackContext)
    console.log(state)
    return (
        <>
            <NavigationEvents onWillFocus={fetchTracks}/>
           
            <FlatList 
                data={state}
                keyExtractor={(item) => item._id}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity onPress={() => navigation.navigate("TrackDetail",{_id: item._id})}>
                       <ListItem>
                         <ListItem.Content>
                            <ListItem.Title>{item.name}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                      </ListItem>
                  </TouchableOpacity>
                  )
                }}
            />
        </>
    )
}

const styles = StyleSheet.create({})

export default TrackListScreen;