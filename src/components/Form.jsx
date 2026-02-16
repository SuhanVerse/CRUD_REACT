// Form.jsx

import { useState } from "react";
import { toast } from "react-toastify";
import "./Form.css";

const Form = ({ addItem, editItemId, updateItemName, itemToEdit, inputRef }) => {
  const [newItemName, setNewItemName] = useState(itemToEdit?.name || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) {
      toast.error("please provide value");
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
        value={itemToEdit?.name || newItemName}
        ref={inputRef}
        placeholder="Add grocery item..."
        onChange={(event) => setNewItemName(event.target.value)}
      />
      <button type="submit" className="form-submit">
        {editItemId ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default Form;
