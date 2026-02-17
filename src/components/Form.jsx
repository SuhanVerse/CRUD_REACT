// Form.jsx

import { useState } from "react";
import { toast } from "react-toastify";
import "./Form.css";

const Form = ({
    addItem,
    editItemId,
    updateItemName,
    itemToEdit,
    inputRef,
}) => {
    const [newItemName, setNewItemName] = useState(itemToEdit?.name || "");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newItemName.trim()) {
            toast.error("please provide a value");
            return;
        }
        if (editItemId) {
            updateItemName(newItemName);
        } else {
            addItem(newItemName);
        }
        setNewItemName("");
    };

    return (
        <form className="grocery-form" onSubmit={handleSubmit}>
            <input
                type="text"
                className="form-input"
                value={newItemName} // ✅ always driven by local state
                ref={inputRef}
                placeholder="Add grocery item..."
                onChange={(e) => setNewItemName(e.target.value)}
            />
            <button type="submit" className="form-submit">
                {editItemId ? "Update" : "Add"}
            </button>
        </form>
    );
};

export default Form;
