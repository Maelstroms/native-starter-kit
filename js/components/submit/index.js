import React, { Component } from "react";
import { connect } from "react-redux";
import BlankPage2 from "../blankPage2";
import { DrawerNavigator, NavigationActions } from "react-navigation";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
import styles from "./styles";



class ForgotPassword extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container style={styles.container}>

        <Content>
           <Button
            style={styles.btn}
            onPress={() => this.props.navigation.navigate("Login")}>
                  <Text>Cancel</Text>
           </Button>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    setIndex: index => dispatch(setIndex(index)),
    openDrawer: () => dispatch(openDrawer())
  };
}

const ForgotPasswordSwagger = connect(bindAction)(ForgotPassword);
const DrawNav = DrawerNavigator(
  {
    ForgotPassword: { screen: ForgotPassword },
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
