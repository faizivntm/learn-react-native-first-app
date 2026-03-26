type Props = {
  isLoggedIn: boolean;
};

const TernaryOperator = ({ isLoggedIn }: Props) => {
  return (
    <div>
      <h1 className={`${isLoggedIn ? "blue-text" : "red-text"}`}>
        {isLoggedIn ? "Welcome back, user!" : "Please Login"}
      </h1>
      <h2>ini dashboard</h2>
    </div>
  );
};

export default TernaryOperator;
