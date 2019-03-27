import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import { wp, hp } from "../Style/responsive";
import Header from "../Compoents/Header";
import { colors } from "../Style/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

class Login extends Component {
  state = {
    passwordTextEntry: true
  };

  onPasswordTextEntry = () => {
    this.setState(prevState => ({
      passwordTextEntry: !prevState.passwordTextEntry
    }));
  };

  shouldComponentUpdate(prevProps, prevState) {
    return this.state.passwordTextEntry !== prevState.passwordTextEntry;
  }

  onLogin = () => {
    this.props.navigation.navigate("Dashboard");
  };

  render() {
    const { passwordTextEntry } = this.state;
    return (
      <View style={styles.container}>
        <Header text="DOCTOR LOGIN" />
        <View style={styles.logoWrapper}>
          <Image style={styles.img} source={require("../assets/logo.png")} />
          <Text style={styles.quote}>QUALITY CARE WITH A HUMAN TOUCH</Text>
        </View>
        <View style={styles.loginWrapper}>
          <View style={styles.userNameWrapper}>
            <TextInput style={styles.textInput} placeholder="USERNAME" />
          </View>
          <View style={styles.passwordWrapper}>
            <TextInput
              secureTextEntry={passwordTextEntry}
              style={[styles.textInput, { flex: 1 }]}
              placeholder="PASSWORD"
            />
            <Icon
              onPress={this.onPasswordTextEntry}
              style={styles.icon}
              name={passwordTextEntry ? "eye-off" : "eye"}
              color={colors.primaryColor}
              size={20}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={this.onLogin}
            style={styles.buttonWrapper}
          >
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logoWrapper: {
    alignItems: "center"
  },
  img: {
    width: wp("18%"),
    height: hp("18%")
  },
  quote: {
    fontSize: hp("2%"), //2.4
    fontWeight: "bold",
    color: "#333"
  },
  loginWrapper: {
    backgroundColor: colors.whiteColor,
    elevation: 1,
    borderWidth: 0.4,
    marginTop: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: wp("80%"),
    alignSelf: "center",
    borderColor: colors.lightGrey,
    shadowColor: "black",
    shadowOffset: { height: 1, width: 0 },
    shadowOpacity: 0.5
  },
  userNameWrapper: {
    borderBottomWidth: 1,
    marginVertical: 20,
    borderBottomColor: colors.primaryColor,
    paddingVertical: 14
  },
  textInput: {
    fontSize: hp("2%")
  },
  passwordWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    marginVertical: 10,
    alignItems: "center",
    borderBottomColor: colors.primaryColor,
    paddingVertical: 14
  },
  icon: {
    marginHorizontal: 8
  },
  buttonWrapper: {
    backgroundColor: colors.primaryColor,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20
  },
  loginText: {
    color: colors.whiteColor,
    fontSize: hp("2%") //2.2
  }
});

export default Login;
