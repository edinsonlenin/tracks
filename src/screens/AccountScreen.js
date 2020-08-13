import React, {useContext} from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = ({ route, navigation }) => {
  const { setIsLogued } = route.params;
  const { state, signout } = useContext(AuthContext);
  return (
    <>
      <Text style={{ fontSize: 48 }}>Account Screen</Text>
      <Button title="Close Session" onPress={() => {
        signout();
        setIsLogued(false);
      } } />
    </>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
