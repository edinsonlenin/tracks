import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "./Spacer";

const AuthForm = ({
  headerText,
  errorMessage,
  submitButtonText,
  onSubmit,
  setIsLogued,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
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
        <Button
          title={submitButtonText}
          onPress={() => {
            setIsLogued(true);
            onSubmit({ email, password });
          }}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginTop: 15,
  },
});

export default AuthForm;
