const express = require("express");
const bodyParser = require("body-parser");
const tripRoutes = require('./routes/trips');
const walletRoutes = require('./routes/wallet');
const app = express();

const port = 3010;

app.use(bodyParser.json());
app.use('/trips', tripRoutes);
app.use('/wallets', walletRoutes);

app.get("/", (req, res) => res.send("you are on track"));

app.listen(port, () => console.log(`connected on http://localhost:${port}`));