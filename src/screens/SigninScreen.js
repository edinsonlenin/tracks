import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SinginScreen = ({ route, navigation }) => {
  const { setIsLogued } = route.params;
  const { state, signin } = useContext(AuthContext);
  const errorMessage = state.errorMessage;
  return (
    <View style={styles.container}>
      <AuthForm
        headerText='Sign In to your Account'
        errorMessage={errorMessage}
        submitButtonText='Sign In'
        onSubmit={signin}
        setIsLogued={setIsLogued}
      />
      <NavLink 
        title="Dont have an account? Sign up instead"
        navigation={navigation}
        params={setIsLogued}
        routeName='Signup'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  }
});

export default SinginScreen;
