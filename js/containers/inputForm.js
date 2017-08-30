import React, { Component } from "react";
import { connect } from 'react-redux';
import SurveyAgregate from '../components/surveyComponents/surveyAgregate';
import {
  Container,
  Header,
  View,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
import {
  TouchableOpacity,
  DatePickerIOS,
  TextInput,
  AppRegistry,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  Image
} from "react-native";

const getInputForm = (form) => {
  return form;
}

const mapStateToProps = state => {
  return {
    form: getInputForm(state.form)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}

const InputForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(SurveyAgregate)

export default InputForm;
