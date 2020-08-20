import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const NavBar = ({ title }) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.heading}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 80,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#3949ab",
    paddingBottom: 10,
  },
  heading: {
    color: "#fff",
    fontSize: 25,
  },
});
