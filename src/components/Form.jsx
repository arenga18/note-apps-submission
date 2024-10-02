/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Form({ onAddItems }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      name: name,
      quantity: quantity,
      checked: false,
    };

    onAddItems(newItem);

    setName("");
    setQuantity(1);
  }

  let quantityNum = [...Array(20).fill(null)].map((x, i) => (
    <option value={i + 1} key={i + 1}>
      {i + 1}
    </option>
  ));

  return (
    <form className="add-form">
      <h3>Hari ini belanja apa kita?</h3>
      <div>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}>
          {quantityNum}
        </select>
        <input
          type="text"
          placeholder="nama barang..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleSubmit}>Tambah</button>
      </div>
    </form>
  );
}
