// // src/app.ts
// import express from 'express';
// import dotenv from 'dotenv';
// import apiRoutes from './routes/api';
// import { notFound } from './controllers/notfound';
// import { errorHandler } from './middlewares/errorHandler';

// dotenv.config();

// const app = express();

// app.use(express.json());

// app.use('/api', apiRoutes);

// app.use(notFound);
// app.use(errorHandler);

// export default app;

// src/app.ts
import express from 'express';
import dotenv from 'dotenv';
import apiRoutes from './routes/api';
import { notFound } from './controllers/notfound';
import { errorHandler } from './middlewares/errorHandler';
import {  FieldPacket } from 'mysql2';  // Import the FieldPacket type from 'mysql2'
import { pool } from './utils/db';

dotenv.config();

const app = express();

app.use(express.json());

// Function to test database connectivity
async function testDB() {
  try {
    // Correctly type the response from the query
    const [rows]: [any[], FieldPacket[]] = await pool.query('SELECT 1 + 1 AS solution');
    console.log('DB connection test successful. Solution:', rows[0].solution); // Should log "2"
  } catch (error) {
    console.error('DB connection test failed:', error);
  }
}

// Call the testDB function to perform the test
testDB().then(() => {
  app.use('/api', apiRoutes);
  app.use(notFound);
  app.use(errorHandler);
});

export default app;

