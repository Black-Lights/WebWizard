import { Pool } from 'pg';
import bodyParser from 'body-parser';

// PostgreSQL pool setup
const pool = new Pool({
  user: 'postgres',
  host: 'localhost', // Use localhost, local IP, or public IP
  database: 'guiding_light_DB',
  password: 'user',
  port: 5432,
});

const jsonParser = bodyParser.json();

export default async (req, res) => {
  // Parse JSON request body
  jsonParser(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: 'Invalid JSON payload' });
    }

    if (req.method === 'POST') {
      const { name, subject, email, message } = req.body;

      try {
        // Insert data into PostgreSQL database
        const result = await pool.query(
          'INSERT INTO contact_us (name, subject, email, message) VALUES ($1, $2, $3, $4) RETURNING *',
          [name, subject, email, message]
        );
        res.status(200).json(result.rows[0]); // Return inserted data
      } catch (err) {
        console.error('Failed to insert data into database:', err);
        res.status(500).json({ error: 'Failed to insert data into database' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  });
};
