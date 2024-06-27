import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Pool } from 'pg';

const app = express();
const port = 3000;

// PostgreSQL pool setup
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'guiding_light_DB',
  password: 'user',
  port: 5432,
});

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Endpoint to handle form submissions
app.post('/api/contact', async (req, res) => {
  const { name, subject, email, message } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO contact_us (name, subject, email, message) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, subject, email, message]
    );
    res.status(201).json(result.rows[0]); // Ensure res.status() and res.json() are used correctly
  } catch (err) {
    console.error('Failed to insert data into database:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
