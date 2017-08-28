import React, { Component } from "react";
import { TouchableOpacity, DatePickerIOS, TextInput, AppRegistry,  ScrollView,
  StyleSheet, TouchableHighlight, Image} from "react-native";
import ModalDropdown from 'react-native-modal-dropdown';
import DatePicker from 'react-native-datepicker'
import { connect } from "react-redux";
import BlankPage2 from "../blankPage2";
import { DrawerNavigator, NavigationActions } from "react-navigation";
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
import { Grid, Row } from "react-native-easy-grid";
import { setIndex } from "../../actions/list";
import styles from "./styles";

const DEMO_OPTIONS_1 = ['option 1', 'option 2', 'option 3', 'option 4', 'option 5', 'option 6', 'option 7', 'option 8', 'option 9'];


class Survey extends Component {
  constructor(props) {
    super(props);
    this.state = {  text1: 'Please Describe',
                    text2: 'Please Describe',
                    dropdownSelection: '-- Choose --',
                    date:"2016-05-15"
                  };
    this.baseState = this.state;
    //this.resetForm = this.resetForm.bind(this);
  }

  getState() {
        return {
            number: 0
        }
    }
  resetForm() {
    console.log('button working?');
    console.log(this.baseState);
    console.log(this.state);
    //this.setState(this.baseState);
    //return this.forceUpdate();
  }

  static navigationOptions = {
    header: null
  };


  render() {
    return (
      <Container>
        <View style={styles.container}>
          <Content>
            <View style={styles.bg}>

                  <Text>Student</Text>

                  <ModalDropdown ref={el => this._dropdown_3 = el}
                    style={styles.dropdown_3}
                    options={DEMO_OPTIONS_1}
                    dropdownTextStyle={styles.dropdown_3_dropdownTextStyle}
                    dropdownTextHighlightStyle={styles.dropdown_3_dropdownTextHighlightStyle}/>

                  <Text>Rotation</Text>

                  <ModalDropdown ref={el => this._dropdown_3 = el}
                  style={styles.dropdown_3}
                  options={DEMO_OPTIONS_1}
                  dropdownTextStyle={styles.dropdown_3_dropdownTextStyle}
                  dropdownTextHighlightStyle={styles.dropdown_3_dropdownTextHighlightStyle}/>

                  <Text>Date</Text>

                  <DatePicker
                  style={{width: 200}}
                  date={this.state.date}
                  mode="date"
                  placeholder="select date"
                  format="YYYY-MM-DD"
                  minDate="2016-05-01"
                  maxDate="2016-06-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      position: 'absolute',
                      left: 0,
                      top: 4,
                      marginLeft: 0
                    },
                    dateInput: {
                      marginLeft: 36
                    }
                      // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {this.setState({date: date})}}/>

                  <Text>Procedure Group</Text>

                  <ModalDropdown ref={el => this._dropdown_3 = el}
                  style={styles.dropdown_3}
                  options={DEMO_OPTIONS_1}
                  dropdownTextStyle={styles.dropdown_3_dropdownTextStyle}
                  dropdownTextHighlightStyle={styles.dropdown_3_dropdownTextHighlightStyle}/>

                  <Text>Diagnosis</Text>



                  <Text>Case Location</Text>

                  <ModalDropdown ref={el => this._dropdown_3 = el}
                  style={styles.dropdown_3}
                  options={DEMO_OPTIONS_1}
                  dropdownTextStyle={styles.dropdown_3_dropdownTextStyle}
                  dropdownTextHighlightStyle={styles.dropdown_3_dropdownTextHighlightStyle}/>

                  <Text>Role in Case</Text>

                  <ModalDropdown ref={el => this._dropdown_3 = el}
                  style={styles.dropdown_3}
                  options={DEMO_OPTIONS_1}
                  dropdownTextStyle={styles.dropdown_3_dropdownTextStyle}
                  dropdownTextHighlightStyle={styles.dropdown_3_dropdownTextHighlightStyle}/>

                  <Text>Supervisor</Text>

                  <ModalDropdown ref={el => this._dropdown_3 = el}
                  style={styles.dropdown_3}
                  options={DEMO_OPTIONS_1}
                  dropdownTextStyle={styles.dropdown_3_dropdownTextStyle}
                  dropdownTextHighlightStyle={styles.dropdown_3_dropdownTextHighlightStyle}/>

                  <Text>Patient Type</Text>

                  <ModalDropdown ref={el => this._dropdown_3 = el}
                  style={styles.dropdown_3}
                  options={DEMO_OPTIONS_1}
                  dropdownTextStyle={styles.dropdown_3_dropdownTextStyle}
                  dropdownTextHighlightStyle={styles.dropdown_3_dropdownTextHighlightStyle}/>

                  <Text>Student Comments</Text>

                  <TextInput
                  style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                  onChangeText={(text1) => this.setState({text1})}
                  value={this.state.text1}/>

                  <Text>Alternate Experience</Text>

                  <ModalDropdown ref={el => this._dropdown_3 = el}
                  style={styles.dropdown_3}
                  options={DEMO_OPTIONS_1}
                  dropdownTextStyle={styles.dropdown_3_dropdownTextStyle}
                  dropdownTextHighlightStyle={styles.dropdown_3_dropdownTextHighlightStyle}/>

                  <Text>Description of Alternate Experience</Text>

                  <TextInput
                  style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                  onChangeText={(text2) => this.setState({text2})}
                  value={this.state.text2}/>


              <Button
                style={styles.btn}
                onPress={this.resetForm}>
                      <Text>Clear</Text>
               </Button>
               <Button
                style={styles.btn}
                onPress={() => this.props.navigation.navigate("Home")}>
                      <Text>Cancel</Text>
               </Button>





             </View>
          </Content>
        </View>
      </Container>

    );
    this.baseState = this.state;
  }
}

function bindAction(dispatch) {
  return {
    setIndex: index => dispatch(setIndex(index))
  };
}
//This const creates the list for the items...
const mapStateToProps = state => ({
  name: state.user.name,
});

const SurveySwagger = connect(mapStateToProps, bindAction)(Survey);
const DrawNav = DrawerNavigator(
  {
    Survey: { screen: SurveySwagger },
    BlankPage2: { screen: BlankPage2 }
  }
);
const DrawerNav = null;
DrawNav.navigationOptions = ({ navigation }) => {
  DrawerNav = navigation;
  return {
    header: null
  };
};
export default DrawNav;
