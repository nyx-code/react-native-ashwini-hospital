import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Header from "../Compoents/Header";
import Quote from "../Compoents/Quote";
import { colors } from "../Style/Colors";
import { hp, wp } from "../Style/responsive";

const Login = props => {
  const onDoctorLogin = () => {
    props.navigation.navigate("DoctorLogin");
  };

  const onAdminLogin = () => {
    props.navigation.navigate("Admin");
  };

  return (
    <View style={styles.container}>
      <Header text="ASHWINI HOSPITAL" />
      <Quote />
      <View style={styles.loginButtonWrapper}>
        <TouchableOpacity onPress={onDoctorLogin} style={styles.buttonWrapper}>
          <Text style={styles.text}>DOCTOR</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>OR</Text>
        <TouchableOpacity onPress={onAdminLogin} style={styles.buttonWrapper}>
          <Text style={styles.text}>HOUSEMAN / ADMIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loginButtonWrapper: {
    flex: 1,
    marginTop: 60
  },
  buttonWrapper: {
    backgroundColor: colors.primaryColor,
    padding: 20,
    marginVertical: 20,
    width: wp("60%"),
    alignSelf: "center",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: colors.whiteColor,
    fontSize: hp("1.9%")
  },
  orText: {
    fontSize: hp("2%"),
    textAlign: "center",
    marginVertical: 10
  }
});

export default Login;
