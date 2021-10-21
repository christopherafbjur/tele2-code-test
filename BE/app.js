const routes = require("./routes");
const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;

app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.listen(port, () => console.log(`Running server on port ${port}`));
