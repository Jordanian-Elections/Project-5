const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

// middleware
app.use(cors());
app.use(express.json());

// routers

app.listen(port, () => {
  console.log(`server in running on http://localhost:${port}`);
});
