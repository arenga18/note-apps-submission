/* eslint-disable react/prop-types */
import { useState } from "react";
import Items from "./Items";

export default function ListItems({ items, onClear, onToggle, onDelete }) {
  const [sort, setSort] = useState("input");
  let sortedItems = "";
  if (sort === "input") {
    sortedItems = items.slice().sort((a, b) => a - b);
  }
  if (sort === "name") {
    sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
  }
  if (sort === "checked") {
    sortedItems = items.slice().sort((a, b) => b.checked - a.checked);
  }

  console.log(sortedItems);
  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Items
              key={item.id}
              item={item}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))}
        </ul>
      </div>
      <div className="actions">
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button onClick={onClear}>Bersihkan Daftar</button>
      </div>
    </>
  );
}
