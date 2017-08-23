import React, { Component } from "react";
import { TouchableOpacity, DatePickerIOS, TextInput, AppRegistry,  ScrollView,
  StyleSheet} from "react-native";
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
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



class Survey extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder',
                    dropdownSelection: '-- Choose --'  };
  }
  static navigationOptions = {
    header: null
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
              <MenuContext style={{ flex: 1 }} ref="MenuContext">
              { /* You need to place a MenuContext somewhere in your application, usually at the root.
                  Menus will open within the context, and only one menu can open at a time per context.*/}
                <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}/>



             <Menu style={styles.dropdown} onSelect={(value) => this.setState({ dropdownSelection: value })}>
            <MenuTrigger>
              <Text>{this.state.dropdownSelection}</Text>
            </MenuTrigger>
            <MenuOptions optionsContainerStyle={styles.dropdownOptions}
                         renderOptionsContainer={(options) => <ScrollView><Text>CHOOSE SOMETHING....</Text>{options}</ScrollView>}>
              <MenuOption value="Option One">
                <Text>Option One</Text>
              </MenuOption>
              <MenuOption value="Option Two">
                <Text>Option Two</Text>
              </MenuOption>
              <MenuOption value="Option Three">
                <Text>Option Three</Text>
              </MenuOption>
              <MenuOption value="Option Four">
                <Text>Option Four</Text>
              </MenuOption>
              <MenuOption value="Option Five">
                <Text>Option Five</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>



              <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}/>


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
               </MenuContext>
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
