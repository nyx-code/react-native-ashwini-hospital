import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  AsyncStorage
} from "react-native";
import { wp, hp } from "../Style/responsive";
import Header from "../Compoents/Header";
import { colors } from "../Style/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Quote from "../Compoents/Quote";
import { toLogin } from "../api/config";
import { setFontSize } from "../Compoents/SetSize";

class Admin extends Component {
  state = {
    passwordTextEntry: true,
    choiceText: "houseman",
    username: "",
    password: "",
    isLoading: false
  };

  onPasswordTextEntry = () => {
    this.setState(prevState => ({
      passwordTextEntry: !prevState.passwordTextEntry
    }));
  };

  onLogin = () => {
    const { username, password } = this.state;
    this.setState({ isLoading: true });
    toLogin(username, password, 2).then(res => {
      if (res.Code) {
        AsyncStorage.setItem("user-data", JSON.stringify(res)).then(() => {
          AsyncStorage.setItem("loggedin-user", "houseman").then(() => {
            this.props.navigation.navigate("DoctorList");
          });
        });
      } else {
        alert("Username and Password is wrong!");
      }
    });
  };

  onAdmin = () => {
    this.setState({
      choiceText: "admin"
    });
  };

  onHouseman = () => {
    this.setState({
      choiceText: "houseman"
    });
  };

  onChangeUsernameHandle = username => {
    this.setState({ username });
  };

  onChnagePasswordHandle = password => {
    this.setState({ password });
  };
  render() {
    const { passwordTextEntry, choiceText } = this.state;
    return (
      <View style={styles.container}>
        <Header text="HOUSEMAN/ADMIN LOGIN" isBack={true} />
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
              onChangeText={password => this.onChnagePasswordHandle(password)}
            />
            <Icon
              onPress={this.onPasswordTextEntry}
              style={styles.icon}
              name={passwordTextEntry ? "eye-off" : "eye"}
              color={colors.primaryColor}
              size={20}
            />
          </View>
          <View style={styles.choiceWrapper}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={this.onAdmin}
              style={styles.choiceContainer}
            >
              <Icon
                name={
                  choiceText === "admin" ? "radiobox-marked" : "radiobox-blank"
                }
                size={20}
                color={colors.primaryColor}
              />
              <Text style={styles.choiceText}>ADMIN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={this.onHouseman}
              style={styles.choiceContainer}
            >
              <Icon
                name={
                  choiceText === "houseman"
                    ? "radiobox-marked"
                    : "radiobox-blank"
                }
                size={20}
                color={colors.primaryColor}
              />
              <Text style={styles.choiceText}>HOUSEMAN</Text>
            </TouchableOpacity>
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
    fontSize: setFontSize("2.2", "2") //2.2
  },
  choiceWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8
  },
  choiceContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10
  },
  choiceText: {
    fontSize: setFontSize("2.1", "1.9"), //1.9{ios}
    marginHorizontal: 8
  }
});

export default Admin;
