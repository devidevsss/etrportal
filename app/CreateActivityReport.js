import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  const backToDashboard = () => {
    navigation.navigate("Dashboard");
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={backToDashboard}>
          <Image
            source={require("../assets/images/back.png")}
            style={styles.imageStyle}
          />
        </TouchableOpacity>
        <Text style={styles.header}> Create Activity Report</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    marginLeft: 10,
  },
  header: {
    fontSize: 22,
    textAlign: "left",
    fontWeight: "bold",
    marginLeft: 15,
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
    alignItems: "center",
  },
});
export default LoginScreen;
