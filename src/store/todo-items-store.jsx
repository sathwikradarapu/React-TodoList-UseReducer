import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});
const todoItemsReducer = (currentTodoItems, action) => {
  let newList = currentTodoItems; // Start with existing list
  if (action.type === "NEW_ITEM") {
    newList = [
      ...currentTodoItems,
      { name: action.payload.newItem, date: action.payload.newItemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newList = currentTodoItems.filter(
      (item) => item.name !== action.payload.name
    );
  }
  return newList;
};

// Assume todoItemsReducer is already defined elsewhere in your code
const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (newItem, newItemDueDate) => {
    const newActionItem = {
      type: "NEW_ITEM",
      payload: { newItem, newItemDueDate },
    };
    dispatchTodoItems(newActionItem);
  };

  const deleteItem = (itemName) => {
    const deleteAction = { type: "DELETE_ITEM", payload: { name: itemName } };
    dispatchTodoItems(deleteAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
