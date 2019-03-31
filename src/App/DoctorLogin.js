import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  AsyncStorage,
  ScrollView
} from "react-native";
import { wp, hp } from "../Style/responsive";
import Header from "../Compoents/Header";
import { colors } from "../Style/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Quote from "../Compoents/Quote";
import { toLogin } from "./../api/config";
import { setFontSize } from "../Compoents/SetSize";

class DoctorLogin extends Component {
  state = {
    passwordTextEntry: true,
    username: "",
    password: "",
    isLoading: false,
    error: ""
  };

  onPasswordTextEntry = () => {
    this.setState(prevState => ({
      passwordTextEntry: !prevState.passwordTextEntry
    }));
  };

  onLogin = () => {
    const { username, password } = this.state;

    this.setState({ isLoading: true });

    toLogin(username, password, 1)
      .then(res => {
        this.setState({ isLoading: false });

        if (res.Code) {
          // const data = {
          //   name: res.DRNAME
          // };
          //TODO: use localstorage for login
          AsyncStorage.setItem("user-data", JSON.stringify(res)).then(() => {
            this.props.navigation.navigate("App");
          });
        } else {
          alert("Username and Password is wrong!");
        }
      })
      .catch(e => {
        alert("Could not connect server!");
        this.setState({
          error: "Could not connect server!",
          isLoading: false
        });
      });
  };

  onChangeUsernameHandle = username => {
    this.setState({
      username: username
    });
  };
  onChangePasswordHandle = password => {
    this.setState({ password });
  };

  render() {
    const { passwordTextEntry } = this.state;
    return (
      <View style={styles.container}>
        <Header text="DOCTOR LOGIN" isBack={true} />
<<<<<<< HEAD
        <ScrollView style={{ flex: 1 }}>
          <Quote />
          <View style={styles.loginWrapper}>
            <View style={styles.userNameWrapper}>
              <TextInput
                autFocus={true}
                style={styles.textInput}
                placeholder="USERNAME"
                onChangeText={username => this.onChangeUsernameHandle(username)}
              />
            </View>
            <View style={styles.passwordWrapper}>
              <TextInput
                secureTextEntry={passwordTextEntry}
                style={[styles.textInput, { flex: 1 }]}
                placeholder="PASSWORD"
                onChangeText={password => this.onChangePasswordHandle(password)}
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
              {this.state.isLoading ? (
                <ActivityIndicator size="small" color={colors.whiteColor} />
              ) : (
                <Text style={styles.loginText}>LOGIN</Text>
              )}
            </TouchableOpacity>
          </View>
        </ScrollView>
=======
        <Quote />
        <View style={styles.loginWrapper}>
          <View style={styles.userNameWrapper}>
            <TextInput
              autFocus={true}
              style={styles.textInput}
              placeholder="USERNAME"
              onChangeText={username => this.onChangeUsernameHandle(username)}
              value={this.state.username}
            />
          </View>
          <View style={styles.passwordWrapper}>
            <TextInput
              secureTextEntry={passwordTextEntry}
              style={[styles.textInput, { flex: 1 }]}
              placeholder="PASSWORD"
              onChangeText={password => this.onChangePasswordHandle(password)}
              value={this.state.password}
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
            {this.state.isLoading ? (
              <ActivityIndicator size="small" color={colors.whiteColor} />
            ) : (
              <Text style={styles.loginText}>LOGIN</Text>
            )}
          </TouchableOpacity>
        </View>
>>>>>>> f90e72f6d0df1aa46007457d5a715f06e620b890
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
    borderBottomColor: colors.primaryColor
    // paddingVertical: 14
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
    borderBottomColor: colors.primaryColor
    // paddingVertical: 14
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
    fontSize: setFontSize("2.2", "2") //2.2 //2
  }
});

export default DoctorLogin;
