const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("HealthTech Backend is running.");
});

app.post("/api/blood-donors", (req, res) => {
  const { name, bloodType, location, phone } = req.body;

  // Dummy validation
  if (!name || !bloodType || !location || !phone) {
    return res.status(400).json({ error: "All fields are required" });
  }

  console.log("New donor received:", req.body);
  res.status(200).json({ message: "Donor registered successfully" });
});

// ✅ Make sure PORT is defined
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}).on('error', (err) => {
  console.error('❌ Failed to start server:', err);
});