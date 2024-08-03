// src/utils/dbHelpers.ts
import { Pool } from "mysql2/promise";
import { User, QueryResult } from "../types";

const pool: Pool = require("../config/index").pool;

export const registerUser = async (user: User): Promise<QueryResult> => {
  const { username, email, mobile, password } = user;
  const [result] = await pool.query(
    "INSERT INTO userpage (username, email, mobile, password) VALUES (?, ?, ?, ?)",
    [username, email, mobile, password]
  );
  return result as QueryResult;
};

export const getUserByUsername = async (username: string) => {
  const [result] = await pool.query(
    "SELECT * FROM userpage WHERE username = ?",
    [username]
  );
  return result;
};

// export const loginUser = async (username: string, password: string) : Promise<User[]> => {
//   const [rows] = await pool.query('SELECT * FROM users WHERE userpage = ? AND password = ?', [username, password]);
//   return rows as User[];
// };

export const loginUser = async (
  username: string,
  password: string
): Promise<User[]> => {
  const [rows] = await pool.query(
    "SELECT * FROM userpage WHERE username = ? AND password = ?",
    [username, password]
  );
  return rows as User[];
};
