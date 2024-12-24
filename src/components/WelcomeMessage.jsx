import { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

function WelcomeMessage() {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;

  return (
    todoItems.length === 0 && <p className={styles.welcome}>Enjoy Your Day😃</p>
  );
}

export default WelcomeMessage;
