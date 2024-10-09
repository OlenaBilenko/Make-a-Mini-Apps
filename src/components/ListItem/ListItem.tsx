import { TodoItem } from "../../TodoItems";
import "./ListItem.css";

type ListItemProps = TodoItem & {
  //   id: number;
  //   text: string;
  //   checked: boolean;
  onDelete: (id: number) => void;
  onCheck: (id: number) => void;
};

const ListItem = (props: ListItemProps) => {
  return (
    <div className="todo-item">
      <div className="todo-item-task">
        <p>{props.id}</p>
        <p>{props.text}</p>
      </div>
      <div className="todo-item-buttons">
        <input
          type="checkbox"
          checked={props.checked}
          onClick={() => {
            props.onCheck(props.id);
          }}
        />
        <button
          className="button"
          onClick={() => {
            props.onDelete(props.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default ListItem;
