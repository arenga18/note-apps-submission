/* eslint-disable react/prop-types */
import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import ListItems from "./components/ListItems";
import Footer from "./components/Footer";

const groceryItems = [
  {
    id: 1,
    name: "Kopi Bubuk",
    quantity: 2,
    checked: true,
  },
  {
    id: 2,
    name: "Gula Pasir",
    quantity: 5,
    checked: false,
  },
  {
    id: 3,
    name: "Air Mineral",
    quantity: 3,
    checked: false,
  },
];

export default function App() {
  const [items, setItems] = useState(groceryItems);

  function handleAddItems(item) {
    setItems([...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function handleClearItems() {
    setItems([]);
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItems={handleAddItems} />
      <ListItems
        items={items}
        onDelete={handleDeleteItems}
        onToggle={handleToggle}
        onClear={handleClearItems}
      />
      <Footer items={items} />
    </div>
  );
}
