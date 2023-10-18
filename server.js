 
// server.js
import express from 'express';
import { connectToOracleDB } from './apps/component-a/data-access/database';
import apiRoutes from './apps/component-a/entry-points/api/routes';

const app = express();
const port = 3000;

connectToOracleDB();

app.use('/api', apiRoutes); 

app.listen(port, () => {
  console.log(`⚡ Server is running on port ${port} ⚡`);
}); 
