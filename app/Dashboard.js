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

const Dashboard = () => {
  const [searchText, setSearchText] = useState("");
  const navigation = useNavigation();
  const handleClearSearch = () => {
    setSearchText("");
  };
  const createActivityReport = () => {
    navigation.navigate('CreateActivityReport')
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={require("../assets/images/menu.png")}
          style={styles.imageStyle}
        />
        <Text style={styles.header}> Project Activity Reports</Text>
      </View>
      <View style={styles.searchPlusContainer}>
        <View style={styles.searchContainer}>
          <Image
            source={require("../assets/images/search.png")}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Search..."
            onChangeText={setSearchText}
            value={searchText}
          />
          {searchText !== "" && (
            <TouchableOpacity onPress={handleClearSearch}>
              <Image
                source={require("../assets/images/cancel.png")}
                style={styles.clearIcon}
              />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity style={styles.plusIconContainer} onPress={createActivityReport}>
          <Image
            source={require("../assets/images/plus.png")}
            style={styles.plusIcon}
          />
        </TouchableOpacity>
      </View>
      <CardComponent />
    </View>
  );
};
const CardComponent = () => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.arNumber}>AR000000</Text>
      <Text style={styles.projectName}>Project1111</Text>
      <Text style={styles.date}>05-16-2024</Text>
      <View style={styles.statusContainer}>
        <Text style={styles.status}>Pending</Text>
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
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#000",
    height: 35,
    borderRadius: 20,
    marginLeft: 5,
    paddingHorizontal: 10,
    width: "85%",
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 3,
  },
  clearIcon: {
    width: 20,
    height: 20,
  },
  plusIconContainer: {
    marginLeft: 10,
  },
  plusIcon: {
    width: 25,
    height: 25,
    marginLeft: 10,
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
    fontSize: 16,
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
  searchPlusContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    marginTop: 40,
  },
  cardContainer: {
    backgroundColor: "#D3D3D3",
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    position: "relative",
  },
  arNumber: {
    fontWeight: "bold",
    fontSize: 16,
  },
  projectName: {
    fontSize: 14,
    marginTop: 5,
  },
  date: {
    fontSize: 14,
    color: "black",
    marginTop: 5,
  },
  statusContainer: {
    marginTop: 10,
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    padding: 3,
    width: 75,
    position: "absolute",
    right: 15,
    top: 7,
  },
  status: {
    fontSize: 14,
    color: "black",
    textAlign: "center",
  },
});
export default Dashboard;
