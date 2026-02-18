// App.jsx

import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { nanoid } from "nanoid";
import Form from "./components/Form";
import Items from "./components/Items";
import "./App.css";
import "./global.css";

const getLocalStorage = () => {
    try {
        const list = localStorage.getItem("grocery-list");
        return list ? JSON.parse(list) : [];
    } catch {
        return [];
    }
};

const setLocalStorage = (items) => {
    localStorage.setItem("grocery-list", JSON.stringify(items));
};

const App = () => {
    const [items, setItems] = useState(getLocalStorage);
    const [editId, setEditId] = useState(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (editId && inputRef.current) {
            inputRef.current.focus();
        }
    }, [editId]);

    const addItem = (itemName) => {
        const newItem = { id: nanoid(), name: itemName, completed: false };
        const newItems = [...items, newItem];
        setItems(newItems);
        setLocalStorage(newItems);
        toast.success("Item added to the list");
    };

    const toggleCompleted = (itemId) => {
        const newItems = items.map((item) =>
            item.id === itemId ? { ...item, completed: !item.completed } : item,
        );
        setItems(newItems);
        setLocalStorage(newItems);
    };

    const removeItem = (itemId) => {
        const newItems = items.filter((item) => item.id !== itemId);
        setItems(newItems);
        setLocalStorage(newItems);
        if (editId === itemId) setEditId(null);
        toast.success("Item removed");
    };

    const updateItemName = (newName) => {
        const newItems = items.map((item) =>
            item.id === editId
                ? { ...item, name: newName, completed: false }
                : item,
        );
        setItems(newItems);
        setLocalStorage(newItems);
        setEditId(null);
        toast.success("Item updated");
    };

    const cancelEdit = () => setEditId(null);

    const clearAll = () => {
        setItems([]);
        setLocalStorage([]);
        setEditId(null);
        toast.success("List cleared");
    };

    const completedCount = items.filter((i) => i.completed).length;

    return (
        <div className="app-bg">
            <section className="section-center">
                <div className="grocery-header">
                    <h1>Grocery Bud</h1>
                    <p>Your fresh shopping companion</p>
                </div>

                <ToastContainer position="top-center" autoClose={2000} />

                <div className="card-body">
                    {items.length > 0 && (
                        <div className="stats-bar">
                            <span>
                                {completedCount}/{items.length} done{" "}
                                <span className="count">{items.length}</span>
                            </span>
                            <button
                                className="clear-all-btn"
                                type="button"
                                onClick={clearAll}
                            >
                                Clear all
                            </button>
                        </div>
                    )}
                    <Form
                        key={editId ?? "new"}
                        addItem={addItem}
                        updateItemName={updateItemName}
                        editItemId={editId}
                        itemToEdit={items.find((item) => item.id === editId)}
                        inputRef={inputRef}
                        cancelEdit={cancelEdit}
                    />

                    {/* List */}
                    <Items
                        items={items}
                        editCompleted={toggleCompleted}
                        removeItem={removeItem}
                        setEditId={setEditId}
                        editId={editId}
                    />
                </div>
            </section>
        </div>
    );
};

export default App;
