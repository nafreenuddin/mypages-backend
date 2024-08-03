// import dotenv from 'dotenv';

// dotenv.config();

// export const config = {
//     port : process.env.PORT,
//     jwtSecret : process.env.JWT_SECRET || 'your_secret_key',
//     db : {
//             host : process.env.DB_HOST,
//             user : process.env.DB_USER,
//             password : process.env.DB_PASSWORD,
//             database : process.env.DB_NAME,
//             port : process.env.DB_PORT || 3306
//     }
// };

// src/config/index.ts

import 'dotenv/config';

export const config = {
    db: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT || 3306,
      ssl: process.env.DB_SSL === 'true' ? true : false
    },
    jwtSecret: process.env.JWT_SECRET,
    port: process.env.PORT || 3000
  };
