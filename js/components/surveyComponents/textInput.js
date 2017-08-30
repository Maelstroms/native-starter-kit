import React from 'react';
import PropTypes from 'prop-types';
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

const ErasableTextInput = ({text, onChangeText}) => (
  <TextInput
    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
    onChangeText={onChangeText}
    value={text}/>
)

ErasableTextInput.propTypes = {
  onChangeText :PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default ErasableTextInput
