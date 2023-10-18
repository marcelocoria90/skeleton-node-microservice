 
// data-access/database.js
import { createPool } from 'oracledb';

async function connectToOracleDB() {
  try {
    await createPool({
      user: 'your_username',
      password: 'your_password',
      connectString: 'your_connection_string',
    });
    console.log('Connected to Oracle DB');
  } catch (error) {
    console.error('Error connecting to Oracle DB:', error);
  }
}

export default {
  connectToOracleDB,
};
