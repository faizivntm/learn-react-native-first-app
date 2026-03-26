const FormSubmit = () => {
  const handleSubmit = (
    event: React.SubmitEvent<
      HTMLFormElement | HTMLButtonElement | HTMLInputElement
    >,
  ) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Type your name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormSubmit;
