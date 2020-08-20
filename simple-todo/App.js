import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { NavBar } from "./src/components/NavBar";
import { TodoAdderForm } from "./src/components/TodoAdderForm";
import { Todo } from "./src/components/Todo";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: Date.now().toString(),
        title: title,
        isComplete: false,
      },
    ]);
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const renderTodo = ({ item }) => (
    <Todo todo={item} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
  );

  return (
    <View>
      <NavBar title="Todo app1" />
      <View style={styles.container}>
        <TodoAdderForm onSubmit={addTodo} />
      </View>
      <FlatList
        style={styles.todos}
        data={todos}
        renderItem={renderTodo}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  todos: {
    height: 500,
  },
});
