const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

app.use(cors());
// Define Routes
app.use("/heroes", require("./routes/heroes"));
app.use("/items", require("./routes/items"));
app.use("/matches", require("./routes/matches"));
app.use("/players", require("./routes/players"));
//app.use("/auth", require("./routes/auth"));

// Server static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
