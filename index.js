const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

const mongoDB = mongoose.connect(keys.mongoURI);

require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
