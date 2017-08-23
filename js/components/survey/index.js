import React, { Component } from "react";
import { TouchableOpacity, DatePickerIOS, TextInput, AppRegistry,  ScrollView,
  StyleSheet, TouchableHighlight, Image} from "react-native";
import ModalDropdown from 'react-native-modal-dropdown';
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
const DEMO_OPTIONS_2 = [
  {"name": "Rex", "age": 30},
  {"name": "Mary", "age": 25},
  {"name": "John", "age": 41},
  {"name": "Jim", "age": 22},
  {"name": "Susan", "age": 52},
  {"name": "Brent", "age": 33},
  {"name": "Alex", "age": 16},
  {"name": "Ian", "age": 20},
  {"name": "Phil", "age": 24},
  ];


class Survey extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder',
                    dropdownSelection: '-- Choose --'
                  };
  }
  static navigationOptions = {
    header: null
  };

  _dropdown_2_renderRow(rowData, rowID, highlighted) {
    let icon = highlighted ? require('../../../images/heart.png') : require('../../../images/flower.png');
    let evenRow = rowID % 2;
    return (
      <TouchableHighlight underlayColor='cornflowerblue'>
        <View style={[styles.dropdown_2_row, {backgroundColor: evenRow ? 'lemonchiffon' : 'white'}]}>
          <Image style={styles.dropdown_2_image}
                 mode='stretch'
                 source={icon}/>
          <Text style={[styles.dropdown_2_row_text, highlighted && {color: 'mediumaquamarine'}]}>
            {`${rowData.name} (${rowData.age})`}
          </Text>
        </View>
      </TouchableHighlight>
    );
  };

  _dropdown_2_renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
    if (rowID == DEMO_OPTIONS_1.length - 1) return;
    let key = `spr_${rowID}`;
    return (<View style={styles.dropdown_2_separator}
                  key={key}/>);
  };



  /*["Student","Rotation", "Date Performed", "Prodedure Group","Prodedure","Diagnosis Group", "Diagnosis", "Case Location", "Role in Case", "Supervisor", "Patient Type", "Student Comments", "Alternate Experience", "Description of Alternate Experience"]

  <Picker
  selectedValue={this.state.language}
  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>

  setIndex: React.PropTypes.func,

     setParams: [Function: setParams] },
  name: '',
  list:
   [ 'React Native Starter Kit',
     'React Navigation',
     'NativeBase Easy Grid',
     'NativeBase',
     'CodePush',
     'Redux' ],
  setIndex: [Function: setIndex],
  openDrawer: { [Function: openDrawer] toString: [Function] } }


  newPage(index) {
    this.props.setIndex(index);
    Actions.blankPage();
  }
  */

  render() {
    console.log(DrawNav, "786785786");
    console.log('PROPS');
    console.log(this.props);
    console.log('STATE');
    console.log(this.state);
    return (
      <Container>
        <View style={styles.container}>
          <Content>
            <View style={styles.bg}>

              { /* You need to place a MenuContext somewhere in your application, usually at the root.
                  Menus will open within the context, and only one menu can open at a time per context.*/}


                <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}/>

                <Text>Options</Text>
                <View>
                <ModalDropdown style={styles.dropdown_2}
                           textStyle={styles.dropdown_2_text}
                           dropdownStyle={styles.dropdown_2_dropdown}
                           options={DEMO_OPTIONS_2}
                           renderRow={this._dropdown_2_renderRow.bind(this)}
                           renderSeparator={(sectionID, rowID, adjacentRowHighlighted) => this._dropdown_2_renderSeparator(sectionID, rowID, adjacentRowHighlighted)}/>
                  </View>
            <Text>Options</Text>



              {<Grid style={styles.mt}>
                {this.props.list.map((item, i) => (
                  <Row style ={styles.row} key={i}>
                    <Text style={styles.text}>{item}</Text>
                  </Row>
                ))}
              </Grid> }
              <Button
                style={styles.btn}
                onPress={() => this.props.navigation.navigate("Home")}>
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
  list: ["Student","Rotation", "Date Performed", "Prodedure Group","Prodedure","Diagnosis Group","Diagnosis", "Case Location","Role in Case", "Supervisor", "Patient Type", "Student Comments", "Alternate Experience", "Description of Alternate Experience"]
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
