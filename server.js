require('dotenv').config()
const express = require("express")
const bodyParser = require('body-parser');

const cors = require("cors")
const port = process.env.PORT;
const { getMongoConnection } = require("./controllers/mongoService")
const { registerRoutes } = require("./routes/routesRegistry")

const app = express()
app.enable("trust proxy")
app.use(cors({}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }));
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser());

app.get("/api", async (req, res) => {
  console.log(`welcome to nodejs tutorial`)
  res.status(200).json({'message': `node-app running on port ${port}`})
});

getMongoConnection()
registerRoutes(app)

app.listen(port, () => console.log(`server started on port ${port}`))