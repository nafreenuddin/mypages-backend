import { query } from "../utils/db";
import { User, QueryResult } from "../types";
import { hashPassword } from "./authHelpers";

export const registerUser = async (user: User): Promise<QueryResult> => {
  const { username, email, mobile, password } = user;
  const hashedPassword = await hashPassword(password);
  const result = await query(
    "INSERT INTO userpage (username, email, mobile, password) VALUES (?, ?, ?, ?)",
    [username, email, mobile, hashedPassword]
  );
  return result as QueryResult;
};
