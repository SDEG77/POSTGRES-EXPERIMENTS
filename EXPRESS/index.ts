import express from "express";
import { Pool } from "pg";
require("dotenv").config();

module.exports = {
  databaseUrl: process.env.DATABASE_URL
};

const app = express();
const PORT: number = 3000;

app.use(express.json());

const pool = new Pool({
  user: "SDEG77-FREDMENSON",
  host: "postgres",
  database: "pg-tutorial",
  password: "kasdfugHGEDF#129&*$",
  port: 5432
});

app.get("/", (req, res) => {
  res.send("Server is running 321");
});

app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Database connection failed" });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});