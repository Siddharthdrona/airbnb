// Core Module
const path = require("path");

// External Module
const express = require("express");

// Local Modules
const userRouter = require("./routes/userRouter");
const {hostRouter} = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtil");

const app = express();

app.use(express.urlencoded({ extended: false }));

// Serve static files
app.use(express.static(path.join(rootDir, "public")));

app.use(userRouter);
app.use("/host", hostRouter);

// 404 page
app.use((req, res) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
