import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const SingupScreen = ({ navigation, setIsLogued }) => {
  return (
    <View>
      <Text style={{ fontSize: 48 }}>Singup Screen</Text>
      <Button title="Go to Signin" onPress={() => navigation.navigate('Signin')} />
      <Button title="Go to Main Flow" onPress={() => setIsLogued(true)} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SingupScreen;
