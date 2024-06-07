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
  Modal,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const handleLogin = () => {
    if (email === "" || password === "") {
      setModalVisible(true);
    } else {
      navigation.navigate("Dashboard");
    }
  };
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}> ETR Mobile Portal</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <View style={styles.sectionStyle}>
          <Image
            source={require("../assets/images/email.png")}
            style={styles.imageStyle}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.sectionStyle}>
          <Image
            source={require("../assets/images/padlock.png")}
            style={styles.imageStyle}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            autoCapitalize="none"
          />
          <TouchableOpacity onPress={togglePassword}>
            <Image
              source={
                showPassword
                  ? require("../assets/images/show.png")
                  : require("../assets/images/hide.png")
              }
              style={styles.imageStyle}
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Image
              source={require("../assets/images/danger.png")}
              style={styles.modalImage}
            />
            <Text style={styles.modalText}>
              Email and password cannot be empty.
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textStyle}>Okay</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 10,
  },
  header: {
    fontSize: 22,
    marginBottom: 120,
    textAlign: "center",
    fontWeight: "bold",
  },
  inputContainer: {
    width: "100%",
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  label: {
    fontSize: 16,
    textAlign: "left",
    marginLeft: 10,
  },
  sectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#000",
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 40,
    marginBottom: 2,
    paddingHorizontal: 8,
  },
  buttonContainer: {
    width: "91%",
    paddingHorizontal: 10,
    height: 45,
    justifyContent: "center",
    marginLeft: 17,
    marginTop: 70,
    marginBottom: 150,
    backgroundColor: "#2196F3",
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    margin: 60,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalImage: {
    width: 70,
    height: 70,
    marginBottom: 15,
  },
  button: {
    marginTop: 25,
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width: 200,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 16,
  },
});

export default LoginScreen;
