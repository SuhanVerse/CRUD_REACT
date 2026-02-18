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
    cancelEdit,
}) => {
    const [newItemName, setNewItemName] = useState(itemToEdit?.name || "");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newItemName.trim()) {
            toast.error("Please provide a value");
            return;
        }
        if (editItemId) {
            updateItemName(newItemName.trim());
        } else {
            addItem(newItemName.trim());
        }
        setNewItemName("");
    };

    return (
        <form className="grocery-form" onSubmit={handleSubmit}>
            <input
                type="text"
                className={`form-input${editItemId ? " editing" : ""}`}
                value={newItemName}
                ref={inputRef}
                placeholder={
                    editItemId ? "Update item name…" : "Add grocery item…"
                }
                onChange={(e) => setNewItemName(e.target.value)}
            />
            {editItemId && (
                <button
                    type="button"
                    className="cancel-edit-btn"
                    onClick={cancelEdit}
                    aria-label="Cancel editing"
                >
                    Cancel
                </button>
            )}
            <button
                type="submit"
                className={`form-submit${editItemId ? " update" : ""}`}
            >
                {editItemId ? "Update" : "Add"}
            </button>
        </form>
    );
};

export default Form;
