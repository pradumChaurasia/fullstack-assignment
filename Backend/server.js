const express = require('express');
const dotenv = require('dotenv');
const cardRoutes = require('./routes/card.js')
const connectDB = require('./config/db.js');
const cors = require('cors')

const app = express();
dotenv.config();



connectDB();
// app.use(cors())
app.use(cors({
    origin: '*', 
    credentials: true
}));
app.use(express.json());


const PORT = process.env.PORT || 3000;



app.get('/', (req, res) => {
  res.send("Hello app")
})

app.use('/api', cardRoutes);

app.listen(PORT, () => {
  console.log(`Server is live on http://localhost:${PORT}`);
});

// SCj7p3sTCju7zsMC