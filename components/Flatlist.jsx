import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const FlatlistComponent = () => {
  const arrayVerduras = [
    { nombre: "Chocotorta", precio: 1200 },
    { nombre: "Torta frita", precio: 500 },
    { nombre: "Turron turco", precio: 400 },
    { nombre: "Torta de zapallo", precio: 35000 },
    { nombre: "Torta de queso", precio: 100 },
    { nombre: "Torta de huevo", precio: 600 },
    { nombre: "Red velvet", precio: 2000 },
    { nombre: "Torta de papa", precio: 600 },
    { nombre: "Torta de vainilla", precio: 400 },
    { nombre: "Torta de DDL", precio: 1199 },
    { nombre: "Torta free gluten", precio: 900 },
    { nombre: "Torta free sugar", precio: 1000 },
    { nombre: "Torta Bizcocho", precio: 600 },
    { nombre: "Torta de limon", precio: 35000 },
    { nombre: "Tres mil hojas", precio: 1050 },
  ];

  const renderVerduras = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.nombreText}>{item.nombre}</Text>
      <Text style={styles.precioText}>${item.precio}</Text>
    </View>
  );

  return (
    <FlatList
      data={arrayVerduras}
      renderItem={renderVerduras}
      keyExtractor={(item, index) => index.toString()}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f0f0f0",
  },
  itemContainer: {
    backgroundColor: "#ffffff",
    marginBottom: 10,
    padding: 16,
    borderRadius: 8,
    elevation: 4,
  },
  nombreText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  precioText: {
    fontSize: 16,
    color: "#2ecc71", // color verde
    marginTop: 8,
  },
});

export default FlatlistComponent;