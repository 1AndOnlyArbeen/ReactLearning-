import { useState } from "react";

const MultiInputForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", formData.name);
    console.log("age:", formData.age);
    console.log("email:", formData.email);

    setFormData({
      name: "",
      email: "",
      age: "",
    });
    
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <h2> MutliForm</h2>

        <label htmlFor=""> Name:</label>
        <input
          type="text"
          name="name"
          placeholder=" Provide name "
          value={formData.name}
          onChange={handleChange}
        />
        <br />

        <label htmlFor=""> email:</label>
        <input
          type="email"
          name="email"
          placeholder=" example@gmail.com "
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor=""> age:</label>

        <input
          type="number"
          name="age"
          placeholder=" age"
          value={formData.age}
          onChange={handleChange}
        />
        <br />

        <button type="submit"> Submit </button>
      </form>
    </div>
  );
};

export default MultiInputForm;
