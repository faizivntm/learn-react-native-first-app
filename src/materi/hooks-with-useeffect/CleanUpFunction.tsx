import { useEffect } from "react";

const CleanUpFunction = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Interval Running");
    }, 1000);

    return () => {
      console.log("interval dibersihkan");
      clearInterval(interval);
    };
  }, []);

  return <div>CleanUpFunction</div>;
};

export default CleanUpFunction;
