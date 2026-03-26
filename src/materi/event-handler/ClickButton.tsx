const ClickButton = () => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    alert("Button clicked");
    console.log(event.target);
  };
  return;
  <div>
    <button onClick={handleClick}>Click me</button>;
  </div>;
};

export default ClickButton;
