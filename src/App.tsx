import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import CleanUpFunction from "./materi/hooks-with-useeffect/CleanUpFunction";

function App() {
  const [showInterval, setShowInterval] = useState<boolean>(true);
  return (
    <>
      {/* <Header /> */}
      <Main>
        <button
          onClick={() => {
            setShowInterval((prev) => !prev);
          }}
        >
          {showInterval ? "Remove interval" : "setInterval"}
        </button>
        {showInterval && <CleanUpFunction />}
      </Main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
