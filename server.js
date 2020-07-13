const express = require("express");
const app = express();
const cors = require("cors");

app.get("/", (req, res) => res.json({ msg: "Welcome to the Dota App Api" }));
app.use(cors());
// Define Routes
app.use("/heroes", require("./routes/heroes"));
app.use("/items", require("./routes/items"));
app.use("/matches", require("./routes/matches"));
//app.use("/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
