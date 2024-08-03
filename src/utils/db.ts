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
import { createPool, Pool } from 'mysql2/promise';
import { config } from '../config';

export const pool: Pool = createPool({
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
  port: Number(config.db.port),
  ssl: config.db.ssl ? {
    rejectUnauthorized: false
  } : undefined
});
