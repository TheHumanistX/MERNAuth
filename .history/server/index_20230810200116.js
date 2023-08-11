// const express = require('express')
// const dotenv = require('dotenv').config()
// const cors = require('cors')
// const mongoose = require('mongoose')

// // Database Connection
// mongoose.connect(process.env.MONGO_URL)
//     .then(() => console.log('Database connected...'))
//     .catch((err) => console.log('Database not connected... :', err))

// const app = express()

// // Middleware

// const corsOptions = {
//     origin: 'http://localhost:5173',
//     credentials: true,  // This allows session cookies to be sent back and forth
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization']
// };

// app.use(cors(corsOptions));

// app.use(express.json())



// app.use('/', require('./routes/authRoutes'));

// const port = 8000;
// app.listen(port, () => console.log(`Server is running on port ${port}`))

const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
