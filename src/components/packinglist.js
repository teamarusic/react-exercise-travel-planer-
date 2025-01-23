import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItems,
  onPackedItem,
  deleteAll,
}) {
  const [sort, setSort] = useState("input");
  let sortedd;
  if (sort === "input") sortedd = items;
  if (sort === "description")
    sortedd = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sort === "packed")
    sortedd = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <>
      <div className="list">
        <ul>
          {sortedd.map((item) => (
            <Item
              item={item}
              onDeleteItems={onDeleteItems}
              onPackedItem={onPackedItem}
              key={item.id}
            />
          ))}
        </ul>
      </div>
      <div className="actions">
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="input">Orded by input</option>
          <option value="description">Orded by description</option>
          <option value="packed">Orded by packed</option>
        </select>
      </div>
      <button onClick={() => deleteAll()}> Clear everything</button>
    </>
  );
}
