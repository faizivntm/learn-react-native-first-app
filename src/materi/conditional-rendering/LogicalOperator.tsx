type Props = {
  isLoggedIn: boolean;
};

const LogicalOperator = ({ isLoggedIn }: Props) => {
  return (
    <div>
      {isLoggedIn && <h1>Welcome back, user !</h1>}
      {isLoggedIn || <h1>Please Login</h1>}
      <h2>ini dashboard</h2>
    </div>
  );
};

export default LogicalOperator;
