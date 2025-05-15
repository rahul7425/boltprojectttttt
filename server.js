const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');

dotenv.config();
const app = express();

// ✅ CORS Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // if you're using cookies/auth headers
}));

// ✅ JSON parser
app.use(express.json());

// ✅ Routes
app.use('/api/contact', contactRoutes);

// ✅ DB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

// ✅ Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
