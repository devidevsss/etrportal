import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Menu, Provider } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";

const CreateActivityReport = () => {
  const navigation = useNavigation();

  const [projectVisible, setProjectVisible] = useState(false);
  const [clientVisible, setClientVisible] = useState(false);
  const [employeeVisible, setEmployeeVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedClient, setSelectedClient] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState("");

  const openProjectMenu = () => setProjectVisible(true);
  const closeProjectMenu = () => setProjectVisible(false);
  const openClientMenu = () => setClientVisible(true);
  const closeClientMenu = () => setClientVisible(false);
  const openEmployeeMenu = () => setEmployeeVisible(true);
  const closeEmployeeMenu = () => setEmployeeVisible(false);

  const backToDashboard = () => {
    navigation.navigate("Dashboard");
  };

  return (
    <Provider>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={backToDashboard}>
            <Icon name="arrow-back" size={25} color="black" />
          </TouchableOpacity>
          <Text style={styles.header}>Create Activity Report</Text>
        </View>

        <Text style={styles.label}>Project</Text>
        <View style={styles.dropdownContainer}>
          <Menu
            visible={projectVisible}
            onDismiss={closeProjectMenu}
            anchor={
              <TouchableOpacity
                onPress={openProjectMenu}
                style={styles.dropdownButton}
              >
                <Text style={styles.dropdownButtonText}>
                  {selectedProject ? selectedProject : "-- Select a project --"}
                </Text>
                <Icon name="arrow-drop-down" size={25} color="black" />
              </TouchableOpacity>
            }
            style={styles.menu}
          >
            {["Project 1", "Project 2", "Project 3"].map((option) => (
              <View key={option} style={styles.menuItemWrapper}>
                <Menu.Item
                  onPress={() => {
                    setSelectedProject(option);
                    closeProjectMenu();
                  }}
                  title={option}
                  style={styles.menuItem}
                />
              </View>
            ))}
          </Menu>
        </View>

        <Text style={styles.label}>Client</Text>
        <View style={styles.dropdownContainer}>
          <Menu
            visible={clientVisible}
            onDismiss={closeClientMenu}
            anchor={
              <TouchableOpacity
                onPress={openClientMenu}
                style={styles.dropdownButton}
              >
                <Text style={styles.dropdownButtonText}>
                  {selectedClient ? selectedClient : "-- Select a client --"}
                </Text>
                <Icon name="arrow-drop-down" size={25} color="black" />
              </TouchableOpacity>
            }
            style={styles.menu}
          >
            {["Client 1", "Client 2", "Client 3"].map((option) => (
              <View key={option} style={styles.menuItemWrapper}>
                <Menu.Item
                  onPress={() => {
                    setSelectedClient(option);
                    closeClientMenu();
                  }}
                  title={option}
                  style={styles.menuItem}
                />
              </View>
            ))}
          </Menu>
        </View>

        <View style={styles.employeeLabelContainer}>
          <Text style={styles.label}>Employee</Text>
          <Image
            source={require('../assets/images/plus.png')}
            style={styles.plusIcon}
          />
        </View>
        <View style={styles.dropdownContainer}>
          <Menu
            visible={employeeVisible}
            onDismiss={closeEmployeeMenu}
            anchor={
              <TouchableOpacity
                onPress={openEmployeeMenu}
                style={styles.dropdownButton}
              >
                <Text style={styles.dropdownButtonText}>
                  {selectedEmployee ? selectedEmployee : "-- Select an employee --"}
                </Text>
                <Icon name="arrow-drop-down" size={25} color="black" />
              </TouchableOpacity>
            }
            style={styles.menu}
          >
            {["Employee 1", "Employee 2", "Employee 3"].map((option) => (
              <View key={option} style={styles.menuItemWrapper}>
                <Menu.Item
                  onPress={() => {
                    setSelectedEmployee(option);
                    closeEmployeeMenu();
                  }}
                  title={option}
                  style={styles.menuItem}
                />
              </View>
            ))}
          </Menu>
        </View>
        {/* <View style={styles.dropdownContainerEmployee}>
          <Menu
            visible={employeeVisible}
            onDismiss={closeEmployeeMenu}
            anchor={
              <TouchableOpacity
                onPress={openEmployeeMenu}
                style={styles.dropdownButtonEmployee}
              >
                <Text style={styles.dropdownButtonText}>
                  {selectedEmployee ? selectedEmployee : "-- Select an employee --"}
                </Text>
                <Icon name="arrow-drop-down" size={25} color="black" />
              </TouchableOpacity>
            }
            style={styles.menu}
          >
            {["Employee 1", "Employee 2", "Employee 3"].map((option) => (
              <View key={option} style={styles.menuItemWrapper}>
                <Menu.Item
                  onPress={() => {
                    setSelectedEmployee(option);
                    closeEmployeeMenu();
                  }}
                  title={option}
                  style={styles.menuItem}
                />
              </View>
            ))}
          </Menu>
        </View> */}
        <View style={styles.taskLabelContainer}>
          <Text style={styles.label}>Employee</Text>
          <Image
            source={require('../assets/images/plus.png')}
            style={styles.plusIconTask}
          />
        </View>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    marginLeft: 10,
    marginBottom: 15,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 10,
  },
  employeeLabelContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginLeft: 5,
  },
  tasksLabelContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  plusIcon: {
    width: 20,
    height: 20,
    marginTop: 20,
    marginLeft: '69%',
  },
  plusIconTask: {
    width: 20,
    height: 20,
    marginTop: 5,
    marginLeft: '76%',
  },
  dropdownContainer: {
    marginTop: 10,
    marginHorizontal: 10,
    position: "relative",
  },
  containerTask: {
    marginTop: 10,
    marginHorizontal: 10,
    position: "relative",
  },
  dropdownButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    justifyContent: "space-between",
  },
  // dropdownContainerEmployee: {
  //   marginTop: 10,
  //   marginHorizontal: 10,
  //   position: "relative",
  // },
  // dropdownButtonEmployee: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   padding: 10,
  //   borderWidth: 1,
  //   borderColor: "#ccc",
  //   borderRadius: 10,
  //   justifyContent: "space-between",
  //   width: '90%',
  // },
  dropdownButtonText: {
    fontSize: 16,
  },
  menu: {
    marginTop: 48,
    marginLeft: 2,
    width: "89%",
    backgroundColor: "white", 
  },
  menuItemWrapper: {
    backgroundColor: "white", 
  },
  menuItem: {
    backgroundColor: "white", 
  },
  
});

export default CreateActivityReport;