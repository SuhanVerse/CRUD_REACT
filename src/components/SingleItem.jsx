// SingleItem.jsx

import { FiEdit2, FiTrash2 } from "react-icons/fi";
import "./SingleItem.css";

const SingleItem = ({
    item,
    editCompleted,
    removeItem,
    setEditId,
    isEditing,
}) => {
    return (
        <div
            className={[
                "single-item",
                item.completed ? "completed" : "",
                isEditing ? "editing" : "",
            ]
                .filter(Boolean)
                .join(" ")}
        >
            <input
                type="checkbox"
                className="item-checkbox"
                checked={item.completed}
                onChange={() => editCompleted(item.id)}
                aria-label={`Mark "${item.name}" as ${item.completed ? "incomplete" : "complete"}`}
            />
            <p className="item-name">{item.name}</p>
            <button
                className="btn edit-btn"
                type="button"
                onClick={() => setEditId(item.id)}
                aria-label={`Edit "${item.name}"`}
                title="Edit item"
            >
                <FiEdit2 size={16} />
            </button>
            <button
                className="btn remove-btn"
                type="button"
                onClick={() => removeItem(item.id)}
                aria-label={`Delete "${item.name}"`}
                title="Delete item"
            >
                <FiTrash2 size={16} />
            </button>
        </div>
    );
};

export default SingleItem;
