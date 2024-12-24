import { useState, useRef } from "react";
import styles from "./AppDetails.module.css";
import { IoIosAddCircle } from "react-icons/io";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function AppDetails() {
  /*const [newName, setNewName] = useState("");
  const [newDate, setNewDate] = useState("");*/
  const todoName = useRef("");
  const todoDate = useRef("");
  const contextObj = useContext(TodoItemsContext);
  const addNewItem = contextObj.addNewItem;

  /*const onChangeName = (event) => {
    let newItemNameAdded = event.target.value;
    setNewName(newItemNameAdded);
  };

  const onChangeDate = (event) => {
    let newItemDateAdded = event.target.value;
    setNewDate(newItemDateAdded);
  };*/

  const handleFunctionality = () => {
    const name = todoName.current.value;
    const date = todoDate.current.value;
    todoName.current.value = "";
    todoDate.current.value = "";
    addNewItem(name, date);
    /*setNewName("");
    setNewDate("");*/
  };

  return (
    <div className={`${styles["margin-total"]} row`}>
      <div className="col-6">
        {/*<input
          type="text"
          placeholder="Enter Todo Here"
          className={styles["width-total"]}
          onChange={onChangeName}
          value={newName}
        />*/}
        <input
          type="text"
          placeholder="Enter Todo Here"
          className={styles["width-total"]}
          ref={todoName}
        />
      </div>
      <div className="col-4">
        {/* <input
          type="date"
          className={styles["width-total"]}
          onChange={onChangeDate}
          value={newDate}
        />*/}
        <input type="date" className={styles["width-total"]} ref={todoDate} />
      </div>
      <div className="col-2">
        <button
          type="button"
          className={`${styles["button-total"]} btn btn-success`}
          onClick={handleFunctionality}
        >
          <IoIosAddCircle />
        </button>
      </div>
    </div>
  );
}

export default AppDetails;
