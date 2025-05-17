const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');

dotenv.config();
const app = express();

// ✅ CORS Middleware
app.use(cors());

// ✅ JSON parser
app.use(express.json());

// ✅ Routes
app.use('/api/contact', contactRoutes);

// ✅ DB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err.message));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


