// Items.jsx

import SingleItem from "./SingleItem";
import "./Items.css";

const Items = ({ items, editCompleted, removeItem, setEditId, editId }) => {
    if (items.length === 0) {
        return (
            <div className="empty-state">
                <span className="empty-icon">🛒</span>
                <p>Your list is empty — add some items above!</p>
            </div>
        );
    }

    return (
        <div className="items-list">
            {items.map((item) => (
                <SingleItem
                    key={item.id}
                    item={item}
                    editCompleted={editCompleted}
                    removeItem={removeItem}
                    setEditId={setEditId}
                    isEditing={editId === item.id}
                />
            ))}
        </div>
    );
};

export default Items;
