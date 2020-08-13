import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SingupScreen = ({ route, navigation }) => {
  const { setIsLogued } = route.params;
  const { state, signup } = useContext(AuthContext);
  const errorMessage = state.errorMessage;
  return (
    <View style={styles.container}>
      <AuthForm
        headerText='Sign Up for Tracker'
        errorMessage={errorMessage}
        submitButtonText='Sign Up'
        onSubmit={signup}
        setIsLogued={setIsLogued}
      />
      <NavLink 
        title="Already have an account? Sign in instead"
        navigation={navigation}
        routeName='Signin'
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

export default SingupScreen;
