 
// apps/component-a/entry-points/api/controllers.js
import { getConnection } from 'oracledb';
import db from '../../data-access/database';

async function getSomeData(req, res) {
  try {
    const connection = await getConnection();
    const result = await connection.execute('SELECT * FROM your_table');
    res.json(result.rows);
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
}

export default {
  getSomeData,
};
