import { useState } from "react";

const CounterComponent = () => {
  const [value, setValue] = useState<number>(0);

  const handleClick = () => {
    setValue(value + 1);
  };
  return (
    <div>
      <p>{value}</p>
      <button onClick={handleClick}>Count Number</button>
    </div>
  );
};

export default CounterComponent;
