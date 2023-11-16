import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Principal = ({ navigation }) => {
  const navigateToPage = (pageName) => {
    navigation.navigate(pageName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateToPage("Flatlist")}
        >
          <Text style={styles.buttonText}>Flatlist</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateToPage("PushNotification")}
        >
          <Text style={styles.buttonText}>PushNotification</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateToPage("Pagina3")}
        >
          <Text style={styles.buttonText}>Página 3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateToPage("Pagina4")}
        >
          <Text style={styles.buttonText}>Página 4</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#CBC4BD",
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: "#FBC895",
    padding: 15,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

export default Principal;
