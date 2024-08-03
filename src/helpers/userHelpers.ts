import { query } from "../utils/db";
import { User } from "../types";

export const getUserByUsername = async (username: string): Promise<User[]> => {
  const result = await query<User[]>(
    "SELECT * FROM userpage WHERE username = ?",
    [username]
  );
  return result;
};
