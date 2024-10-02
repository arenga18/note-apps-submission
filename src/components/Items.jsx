/* eslint-disable react/prop-types */
export default function Items({ item, onToggle, onDelete }) {
  return (
    <li key={item.id}>
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => onToggle(item.id)}
      />
      <span style={item.checked ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.name}
      </span>
      <button onClick={() => onDelete(item.id)}>&times;</button>
    </li>
  );
}
