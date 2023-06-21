import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  console.log(inputs);

  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input
          type="text"
          placeholder="User Name"
          name="username"
          required
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="User Eamil"
          name="email"
          required
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Register</button>
        <p>This is an error !</p>
        <span>
          Already have an account?
          <Link
            to="/login
          ">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
