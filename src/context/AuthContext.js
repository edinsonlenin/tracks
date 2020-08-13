import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { AsyncStorage } from "react-native";
import * as RootNavigation from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signup":
      return { errorMessage: "", token: action.payload };
    case "signout":
      return { errorMessage: "", token: null };
    default:
      return state;
  }
};

const signup = (dispatch) => async ({ email, password }) => {
  try {
    console.log(email, password);
    const response = await trackerApi.post("/signup", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signup", payload: response.data.token });
    //RootNavigation.navigate('Signin');
  } catch (error) {
    console.log(error.response.data);
    dispatch({ type: "add_error", payload: "Ocurred an error in Signup" });
  }
};

const signout = (dispatch) => async () => {
  try {
    console.log("sigout en conte4xt");
    await AsyncStorage.removeItem("token");
    dispatch({ type: "signout" });
  } catch (error) {
    dispatch({ type: "add_error", payload: "Ocurred an error in Signout" });
  }
};

const signin = (dispatch) => async () => {
  try {
    console.log("sigout en conte4xt");
    await AsyncStorage.removeItem("token");
    dispatch({ type: "signout" });
  } catch (error) {
    dispatch({ type: "add_error", payload: "Ocurred an error in Signout" });
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signout, signin },
  { token: null, errorMessage: "" }
);
