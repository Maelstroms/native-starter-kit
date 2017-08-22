import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
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
//import { setIndex } from "../../actions/list";
import styles from "./styles";



class Survey extends Component {
  static navigationOptions = {
    header: null
  };

  static numbers = [1, 2, 3, 4, 5];
  static list = ["Student","Rotation", "Date Performed", "Prodedure Group","Prodedure","Diagnosis Group","Diagnosis", "Case Location","Role in Case", "Supervisor", "Patient Type", "Student Comments", "Alternate Experience", "Description of Alternate Experience"];

  /*["Student","Rotation", "Date Performed", "Prodedure Group","Prodedure","Diagnosis Group", "Diagnosis", "Case Location", "Role in Case", "Supervisor", "Patient Type", "Student Comments", "Alternate Experience", "Description of Alternate Experience"]

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
              {<Grid style={styles.mt}>
                {this.props.list.map((item, i) => (
                  <Row key={i}>
                    <TouchableOpacity
                      style={styles.row}
                      onPress={() =>
                        this.props.navigation.navigate("BlankPage", {
                          name: { item }
                        })}>
                      <Text style={styles.text}>{item}</Text>
                    </TouchableOpacity>
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
