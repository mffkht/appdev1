import React, { useState } from "react";

export default function CrudExample() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // CREATE
  const addItem = () => {
    if (!newItem) return;
    setItems([...items, newItem]);
    setNewItem("");
  };

  // READ (items are displayed below)

  // UPDATE
  const updateItem = (index) => {
    if (!newItem) return;
    const updatedItems = [...items];
    updatedItems[index] = newItem;
    setItems(updatedItems);
    setNewItem("");
    setEditIndex(null);
  };

  // DELETE
  const deleteItem = (index) => {
    const filteredItems = items.filter((_, i) => i !== index);
    setItems(filteredItems);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">React CRUD Example</h1>

      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Enter item"
        className="border p-2 mr-2"
      />
      <button
        onClick={editIndex !== null ? () => updateItem(editIndex) : addItem}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {editIndex !== null ? "Update" : "Add"}
      </button>

      <ul className="mt-4">
        {items.map((item, index) => (
          <li key={index} className="flex justify-between p-2 border-b">
            {item}
            <div>
              <button
                onClick={() => {
                  setNewItem(item);
                  setEditIndex(index);
                }}
                className="bg-yellow-400 px-3 py-1 mr-2 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => deleteItem(index)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
  