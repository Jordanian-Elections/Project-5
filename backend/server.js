
// server.js
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const localListsRoutes = require('./routes/localListsRoutes'); 
const partyListsRoutes = require('./routes/partyListsRoutes'); 

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/local-lists', localListsRoutes); 
app.use('/api/party-lists', partyListsRoutes); 


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
