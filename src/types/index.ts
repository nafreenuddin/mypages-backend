// src/types/index.ts
export interface User {
    id ?: number;
    username: string;
    email: string;
    mobile: string;
    password: string;
  }
  
  export interface QueryResult {
    insertId: number;
    affectedRows: number;

    // Add other properties if needed
  }
  