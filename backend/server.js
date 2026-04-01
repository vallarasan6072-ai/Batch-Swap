const express = require("express");
const cors = require("cors");

require("./db");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth.js"));
app.use("/api", require("./routes/swap.js"));

app.listen(8080, () => console.log("Server running on port 8080"));