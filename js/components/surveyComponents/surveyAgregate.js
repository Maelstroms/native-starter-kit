import React from 'react';
import PropTypes from 'prop-types';
import ErasableTextInput from './textInput';
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
  AppRegistry,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  Image
} from "react-native";

//if (this.props.widgits) {
const SurveyAgregate = ({widgits, onTextInputChangeText}) =>(
    <View>
      {widgits.map(widgit => (
        <ErasableTextInput key={widgit.id} {...widgit} onChangeText={() => onTextInputChangeText(widgit.id)} />
        ))}
    </View>
  )
//}

SurveyAgregate.propTypes = {
  widgits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTextInputChangeText: PropTypes.func.isRequired
}

export default SurveyAgregate;
