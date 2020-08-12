import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const AccountScreen = ({ route, navigation }) => {
  const { loguear } = route.params;
  return (
    <>
      <Text style={{ fontSize: 48 }}>Account Screen</Text>
      <Button title="Close Session" onPress={() => loguear(false)} />
    </>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
