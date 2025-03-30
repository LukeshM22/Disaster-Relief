const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Detailed Connection Configuration
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      authSource: 'admin',
      ssl: true
    });
    console.log('MongoDB Connected Successfully');
  } catch (error) {
    console.error('MongoDB Connection Error:', error);
    console.error('Detailed Error:', {
      name: error.name,
      message: error.message,
      code: error.code
    });
  }
}

connectDB();

// Rest of your server code
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});