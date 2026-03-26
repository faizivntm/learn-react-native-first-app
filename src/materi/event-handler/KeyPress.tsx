const KeyPress = () => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log("Key pressed: ", event.key);
  };

  return (
    <div>
      <input type="text" onKeyDown={handleKeyDown} />
    </div>
  );
};

export default KeyPress;
