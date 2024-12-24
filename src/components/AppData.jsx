import styles from "./AppData.module.css";
import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
function AppData(props) {
  const contextObj = useContext(TodoItemsContext);
  const deleteItem = contextObj.deleteItem;
  return (
    <div className={`${styles["margin-total"]} row`}>
      <div className="col-6">
        <p className={styles["text-total"]}>{props.name}</p>
      </div>
      <div className="col-4">
        <p className={styles["text-total"]}>{props.date}</p>
      </div>
      <div className="col-2">
        <button
          type="button"
          className={`${styles["width-total"]} btn btn-danger`}
          onClick={() => deleteItem(props.name)}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
}
export default AppData;
