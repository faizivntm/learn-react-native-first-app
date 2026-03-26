import "./App.css";
import Main from "./components/Main";
import LogicalOperator from "./materi/conditional-rendering/LogicalOperator";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Main>
        <LogicalOperator isLoggedIn={true} />
      </Main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
