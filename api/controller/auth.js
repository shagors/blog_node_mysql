import { db } from "../db.js";
import bcrypt from "bcryptjs";

export const register = (req, res) => {
  // check existing user
  const q = "SELECT * FROM users WHERE email = ? OR username = ?";

  db.query(q, [req.body.email, req.body.name], (error, data) => {
    if (error) return res.json(error);
    if (data.length) return res.status(409).json("User already exists!");

    //   Hash the password and create a user
    const salt = bcrypt.getSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO users(`username`, `email`, `password`) VALUES (?)";
    const values = [req.body.usename, req.body.email, hash];

    db.query(q, [values], (error, data) => {
      if (error) return res.json(error);
      return res.status(200).json("User has been Created.");
    });
  });
};

export const login = (req, res) => {};

export const logout = (req, res) => {};
