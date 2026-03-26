import { useState } from "react";

const ItemList = () => {
  const [item, setItem] = useState<string[]>(["Item 1", "Item 2"]);

  const handleAddNewItem = () => {
    setItem([...item, `Item ${item.length + 1}`]);
  };

  return (
    <div>
      <ul>
        {item.map((value: string, key: number) => (
          <li key={key}>{value}</li>
        ))}
        <button onClick={handleAddNewItem}>Add New Item</button>
      </ul>
    </div>
  );
};

export default ItemList;
