import { useEffect, useState } from "react";

const Effect = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (count) {
      console.log("setiap kali count berubah ini selalu berjalan");
    }
  }, [count]);

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Use Effect Function</h1>
      <h2>{count}</h2>
      <button onClick={handleCount}>Increase</button>
    </div>
  );
};

export default Effect;
