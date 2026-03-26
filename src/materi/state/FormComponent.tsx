import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  password: string;
};

const FormComponent = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          ></input>
        </div>
        <button type="submit">Submit Data</button>
      </form>
    </div>
  );
};

export default FormComponent;
