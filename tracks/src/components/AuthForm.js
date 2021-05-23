import React,{useState} from "react"
import {Text,Input,Button} from "react-native-elements"
import {StyleSheet,View} from "react-native"
import Spacer from "../components/Spacer"

const AuthForm = ({headerText,errorMessage,onSubmit, submitButtonText}) => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    return (
        <> 
          <Spacer>
             <Text h3>{headerText}</Text>
          </Spacer>
          <Input 
          label="Email"
          value={email}
          onChangeText={(newEmailValue) => setEmail(newEmailValue)}
          autoCapitalize="none"
          autoCorrect={false}
          />
            <Spacer />
          <Input 
          label="Password"
          value={password}
          onChangeText={(newPasswordValue) => setPassword(newPasswordValue)} 
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}   
          />
          {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text>: null}
          <Spacer>
            <Button title={submitButtonText} onPress={() => onSubmit({email,password})}/>
          </Spacer>
        </>
    )
}

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: "red",
        marginLeft: 15,
        marginTop: 15
    }
})

export default AuthForm;