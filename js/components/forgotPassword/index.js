import React, { Component } from "react";
import {TouchableOpacity } from "react-native";
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
       <Header>
          <Left>

            <Button
              transparent
              onPress={() => {
                DrawerNav.dispatch(
                  NavigationActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: "Home" })]
                  })
                );
                DrawerNav.goBack();
              }}
            >
              <Icon active name="power" />
            </Button>
          </Left>

          <Body>
            <Title>Home</Title>
          </Body>

          <Right>
            <Button
              transparent
              onPress={() => DrawerNav.navigate("DrawerOpen")}
            >
              <Icon active name="menu" />
            </Button>
          </Right>
        </Header>
        <Text>
        A reset email has been sent to the email associated with this account. Please check your email inbox. If you fail to receive an email please press the resend email link below.
        </Text>
        <TouchableOpacity
                    style={styles.row}
                    onPress={() => this.props.navigation.navigate("ForgotPassword")}
                  >
                    <Text style={styles.text}>Resend Email</Text>
                  </TouchableOpacity>
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
