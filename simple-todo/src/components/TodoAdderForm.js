import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View } from "react-native";

export const TodoAdderForm = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Введите название дела"
        value={value}
        onChangeText={setValue}
        style={styles.input}
        autoCorrect={false}
      />
      <Button disabled={!value} onPress={pressHandler} title="Добавить" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "70%",
    borderStyle: "solid",
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#3949ab",
  },
});
