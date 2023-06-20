import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input type="text" placeholder="User Name" required />
        <input type="email" placeholder="User Eamil" required />
        <input type="password" placeholder="password" required />
        <button>Register</button>
        <p>This is an error !</p>
        <span>
          Already have an account?{" "}
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
