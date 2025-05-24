const express = require('express');
const cors = require('cors');

const bookingsRoutes = require('./routes/bookings');
const reportsRoutes = require('./routes/reports');
const chatRoutes = require('./routes/chat');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/bookings', bookingsRoutes);
app.use('/api/reports', reportsRoutes);
app.use('/api/chat', chatRoutes);

app.get('/', (req, res) => {
  res.send('HealthTech Backend is running.');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
