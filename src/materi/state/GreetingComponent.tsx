import { useState } from "react";

const GreetingComponent = () => {
  const [greeting, setGreeting] = useState<string>("Hallo, Faiz!");

  const handleClick = () => {
    if (greeting == "Hello, Faiz!") {
      setGreeting("Hello, World!");
    } else {
      setGreeting("Hello, Faiz!");
    }
  };
  return (
    <div>
      <p>{greeting}</p>
      <button onClick={handleClick}>Update greeting</button>
    </div>
  );
};

export default GreetingComponent;
