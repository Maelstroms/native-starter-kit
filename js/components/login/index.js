import React, { Component } from "react";
import { Image, TextInput, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import {
  Container,
  Content,
  Item,
  Input,
  Button,
  Icon,
  View,
  Text
} from "native-base";
import { Field, reduxForm } from "redux-form";
import { setUser } from "../../actions/user";
import styles from "./styles";

const background = require("../../../images/tourologo.png");

const validate = values => {
  const error = {};
  error.email = "";
  error.password = "";
  var ema;
  var pw;
  if (values.email === undefined) {
    ema = "";
  }
  if (values.email != undefined) {
    ema = values.email;
  }
  if (values.password === undefined) {
    pw = "";
  }
  if (values.password != undefined) {
    pw = values.password;
  }
  if (ema.length < 8 && ema !== "") {
    error.email = "too short";
  }
  if (!ema.includes("@") && ema !== "") {
    error.email = "@ not included";
  }
  if (pw.length > 12) {
    error.password = "max 11 characters";
  }
  if (pw.length < 5 && pw.length > 0) {
    error.password = "Weak";
  }
  return error;
};



class Login extends Component {
  static propTypes = {
    setUser: React.PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.renderInput = this.renderInput.bind(this);
    this.loginButtonLogic = this.loginButtonLogic.bind(this);
  }

  setUser(name) {
    this.props.setUser(name);
  }

  renderInput({
    input,
    label,
    type,
    meta: { touched, error, warning },
    inputProps
  }) {var hasError = false ;
    if (error != undefined) {
      hasError = true;
    }
    return (
      <Item error={hasError}>
        <Icon active name={input.name === "email" ? "person" : "unlock"} />
        <Input
          placeholder={input.name === "email" ? "EMAIL" : "PASSWORD"}
          onChangeText={(username) => this.setState({username})}
          {...input}
        />
        {hasError
          ? <Item style={{ borderColor: "transparent" }}>
              <Icon active style={{ color: "red", marginTop: 5 }} name="bug" />
              <Text style={{ fontSize: 15, color: "red" }}>{error}</Text>
            </Item>
          : <Text />}
      </Item>
    );
  }

  loginButtonLogic() {
    validate
    console.log("hit nav button");
    console.log(this.state);
    console.log(this.props.valid);
    handleSome = () => {
        console.log(this.state.username)
   };
   handleSome();

  if (this.props.valid && this.state.username) {
    console.log("Login successful");
    return () => this.props.navigation.navigate("Home")
  } else {
    console.log("Incorrect password");
    return () => this.props.navigation.navigate("ForgotPassword")
  }
  }

  render() {
    return (
      <Container>
        <View style={styles.container}>
          <Content>
            <Image source={background} style={styles.shadow}>
              <View style={styles.bg}>

                <Field name="email" component={this.renderInput} onChangeText={(username) => this.setState({username})} />
                <Field name="password" component={this.renderInput} />

                <Button
                  style={styles.btn}
                  onPress={this.loginButtonLogic()}
                >
                  <Text>Login</Text>
                </Button>
                <TouchableOpacity
                    style={styles.row}
                    onPress={() => this.props.navigation.navigate("ForgotPassword")}
                  >
                    <Text style={styles.text}>Forgot Password</Text>
                  </TouchableOpacity>
              </View>
            </Image>
          </Content>
        </View>
      </Container>
    );
  }
}


const LoginSwag = reduxForm(
  {
    form: "test",
    validate
  },
  function bindActions(dispatch) {
    console.log("LOGIN SWAG");

    return {
      setUser: name => dispatch(setUser(name))
    };
  }
)(Login);

LoginSwag.navigationOptions = {
  header: null
};
export default LoginSwag;
