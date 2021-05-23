import React,{useContext} from "react"
import {Context as AuthContext} from "../context/AuthContext"
import {Text,View,StyleSheet} from "react-native"
import {Button} from "react-native-elements"
import Spacer from "../components/Spacer"
import {FontAwesome} from "@expo/vector-icons"

const AccountScreen = () => {
    const {signout} = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>AccountScreen</Text>
            <Spacer>
             <Button title="Sign Out" onPress={signout}/>
            </Spacer>
        </View>
    )
}

AccountScreen.navigationOptions= {
    title: "settings",
    tabBarIcon: <FontAwesome name="gear" size={20}/>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 100
    },
    text: {
        marginLeft: 20,
        fontSize: 18
    }
})

export default AccountScreen;