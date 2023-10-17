 
// server.js
const express = require('express');
// const db = require('./apps/component-a/data-access/database');
// const apiRoutes = require('./apps/component-a/entry-points/api/routes');

const app = express();
const port = 3000;

// db.connectToOracleDB();

// app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`⚡ Server is running on port ${port} ⚡`);
});
