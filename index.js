const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://zethyst:akshat2002@cluster0.wdelwkx.mongodb.net/userlist');

const listRoutes = require('./routes/listRoutes');
const userRoutes = require('./routes/userRoutes');
const emailRoutes = require('./routes/emailRoutes');

app.use('/api/lists', listRoutes);
app.use('/api/users', userRoutes);
app.use('/api/emails', emailRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on  http://localhost:${PORT}`);
});
