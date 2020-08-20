import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  CheckBox,
} from "react-native";

export const Todo = ({ todo, toggleTodo, deleteTodo }) => {
  const pressHandler = () => {
    toggleTodo(todo.id);
  };

  const longPressHandler = () => {
    deleteTodo(todo.id);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={pressHandler}
      onLongPress={longPressHandler}
    >
      <View style={styles.container}>
        <CheckBox value={todo.isComplete} />
        <Text style={styles.text}>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 5,
  },
  text: {
    fontSize: 20,
  },
});
