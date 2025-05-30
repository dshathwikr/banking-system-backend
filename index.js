const express = require("express");
const connectDB = require("./config/db");
const accountRoutes = require("./routes/accountRoutes");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
connectDB();

app.use(express.json());
app.use("/api", accountRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
