type Props = { isLoggedIn: boolean };

const IfElse = ({ isLoggedIn }: Props) => {
  let message: React.ReactNode;
  if (isLoggedIn) {
    message = <h1>Welcome back, user !</h1>;
  } else {
    message = <h1>Please Login</h1>;
  }

  return (
    <div>
      {message}
      <h2>ini dashboard</h2>
    </div>
  );
};

export default IfElse;
