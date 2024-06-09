const express = require('express');
const connectDB = require('../Core/db');
const userRoutes = require('./routes/router');
const app = express();

require('dotenv').config();

connectDB();

app.use(express.json());
app.use('/api', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
