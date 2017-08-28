import React, { Component } from "react";
import Login from "../components/login/";
import Home from "../components/home/";
import ForgotPassword from "../components/forgotPassword/";
import Survey from "../components/survey/";
import SubmitSurvey from "../components/submit/";
import BlankPage from "../components/blankPage";
import HomeDrawerRouter from "./HomeDrawerRouter";
import { StackNavigator } from "react-navigation";
import { Header, Left, Button, Icon, Body, Title, Right } from "native-base";
HomeDrawerRouter.navigationOptions = ({ navigation }) => ({
  header: null
});
export default (StackNav = StackNavigator({
  Login: { screen: Login },
  ForgotPassword: { screen: ForgotPassword},
  Home: { screen: Home },
  Survey: {screen: Survey},
  SubmitSurvey: {screen: SubmitSurvey},
  BlankPage: { screen: BlankPage }
}));
