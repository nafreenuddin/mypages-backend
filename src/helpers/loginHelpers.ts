import { query } from "../utils/db";
import { User } from "../types";
import { verifyPassword } from "./authHelpers";

export const loginUser = async (username: string, password: string): Promise<User[]> => {
  const users = await query<User[]>(
    "SELECT * FROM userpage WHERE username = ?",
    [username]
  );

  if (users.length === 0) {
    return [];
  }

  const user = users[0];
  const isValidPassword = await verifyPassword(password, user.password);

  if (!isValidPassword) {
    return [];
  }

  return users;
};
