import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Provider as AuthProvider,
  Context as AuthContext,
} from "./src/context/AuthContext";
import { AsyncStorage } from "react-native";
import { navigationRef } from "./src/navigationRef";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TrackListFlow = () => (
  <Stack.Navigator>
    <Stack.Screen name="TrackList" component={TrackListScreen} />
    <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
  </Stack.Navigator>
);

export default function App() {
  const [isLogued, setIsLogued] = useState(false);

  const MainFlow = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="TrackListFlow" component={TrackListFlow} />
        <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          initialParams={{ setIsLogued }}
        />
      </Tab.Navigator>
    );
  };

  const LoginFlow = (props) => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          initialParams={{ setIsLogued }}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signin"
          component={SigninScreen}
          initialParams={{setIsLogued}}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  };
  return (
    <AuthProvider>
      <NavigationContainer ref={navigationRef}>
        {isLogued ? MainFlow() : LoginFlow()}
      </NavigationContainer>
    </AuthProvider>
  );
}
