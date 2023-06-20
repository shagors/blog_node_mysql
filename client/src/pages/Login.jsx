import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="User Name" required />
        <input type="password" placeholder="password" required />
        <button>Login</button>
        <p>This is an error !</p>
        <span>
          Don't have an account?{" "}
          <Link
            to="/register
          ">
            Regiser
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
