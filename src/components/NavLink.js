import React  from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";

const NavLink = ({ navigation, title, routeName, params }) => {
    return (
      <TouchableOpacity onPress={() => params ? navigation.navigate(routeName, {params}) : navigation.navigate(routeName)}>
        <Text style={styles.link}>{title}</Text>
      </TouchableOpacity>);
};

const styles = StyleSheet.create({
  link: {
    color: 'blue',
    textAlign: 'center'
  }
});

export default NavLink;
