// src/utils/dbHelpers.ts
// import { Pool } from "mysql2/promise";
import { User, QueryResult } from "../types";

// const pool: Pool = require("../config/index").pool;
import { query } from "../utils/db";
console.log("Pool:", query);

// export const registerUser = async (user: User): Promise<QueryResult> => {
//   console.log('User:', user);
//   const { username, email, mobile, password } = user;
//   const [result] = await pool.query(
//     "INSERT INTO userpage (username, email, mobile, password) VALUES (?, ?, ?, ?)",
//     [username, email, mobile, password]
//   );
//   return result as QueryResult;
// };

//register user function
export const registerUser = async (user: User): Promise<QueryResult> => {
  console.log("User:", user);
  const { username, email, mobile, password } = user;
  const result = await query(
    "INSERT INTO userpage (username, email, mobile, password) VALUES (?, ?, ?, ?)",
    [username, email, mobile, password]
  );
  return result as QueryResult;
};

// export const getUserByUsername = async (username: string) => {
//   const [result] = await pool.query(
//     "SELECT * FROM userpage WHERE username = ?",
//     [username]
//   );
//   return result;
// };

// getUserByUsername function
// export const getUserByUsername = async (username: string) => {
//   const result = await query("SELECT * FROM userpage WHERE username = ?", [
//     username,
//   ]);
//   return result;
// };
export const getUserByUsername = async (username: string): Promise<User[]> => {
  console.log('Fetching user by username:', username); // Add logging for debugging
  const result = await query<User[]>(
    "SELECT * FROM userpage WHERE username = ?",
    [username]
  );
  console.log('User fetched:', result); // Add logging for debugging
  return result;
};

// export const loginUser = async (username: string, password: string) : Promise<User[]> => {
//   const [rows] = await pool.query('SELECT * FROM users WHERE userpage = ? AND password = ?', [username, password]);
//   return rows as User[];
// };

// export const loginUser = async (
//   username: string,
//   password: string
// ): Promise<User[]> => {
//   const [rows] = await pool.query(
//     "SELECT * FROM userpage WHERE username = ? AND password = ?",
//     [username, password]
//   );
//   return rows as User[];
// };

// loginUser function
export const loginUser = async (
  username: string,
  password: string
): Promise<User[]> => {
  const rows = await query(
    "SELECT * FROM userpage WHERE username = ? AND password = ?",
    [username, password]
  );
  return rows as User[];
};
