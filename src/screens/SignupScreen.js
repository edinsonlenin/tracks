import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const SingupScreen = ({ route, navigation }) => {
//const SingupScreen = ({ navigation }) => {
  const { setIsLogued } = route.params;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state, signup } = useContext(AuthContext);
  const errorMessage = state.errorMessage;
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sing Up for Tracker</Text>
      </Spacer>
      <Input label="Email" value={email} onChangeText={setEmail} />
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button title="Sign Up" onPress={() => {
          setIsLogued(true);
          signup({ email, password })
        }} />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginTop: 15,
  },
});

export default SingupScreen;
