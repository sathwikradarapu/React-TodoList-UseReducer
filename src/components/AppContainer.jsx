import AppDetails from "./AppDetails";
import AppData from "./AppData";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
function AppContainer() {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;
  return (
    <div className="container">
      <AppDetails />
      {todoItems.map((item) => (
        <AppData name={item.name} date={item.date} key={item.name} />
      ))}
    </div>
  );
}
export default AppContainer;
