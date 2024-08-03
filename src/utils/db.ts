// import {createPool, Pool} from 'mysql2/promise';
// import {config} from '../config';

// export const pool : Pool = createPool({
//     host : config.db.host,
//     user : config.db.user,
//     password : config.db.password,
//     database : config.db.database,
//     port : Number(config.db.port),
//     ssl : {
//         rejectUnauthorized : false
// }
// });

// src/utils/db.ts
// import { createPool, Pool } from 'mysql2/promise';
import mysql,{ RowDataPacket } from 'mysql2/promise';
import { config } from '../config';

export const pool = mysql.createPool({
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
  port: Number(config.db.port),
  ssl: config.db.ssl ? {
    rejectUnauthorized: false
  } : undefined
});

// export const query = async (sql: string, params: any[] = []) => {
//   console.log("Pool", pool);
//   const [results] = await pool.query(sql, params);
//   return results;
// };

export const query = async <T = any>(sql: string, params: any[] = []): Promise<T> => {
  console.log('Executing query:', sql, params);
  const [results] = await pool.query<T & RowDataPacket[]>(sql, params);
  return results;
};