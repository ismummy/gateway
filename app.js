const express = require('express')
const setLogging = require('./utils/logging')
const routes = require("./utils/routes")
const setProxy = require("./utils/proxy");
const cors = require("cors")


const app = express()
const port = 3000;

app.use(cors());

setLogging(app)
setProxy(app, routes)

app.use('*', (req, res) => {
    res.status(404).json({
        error: true,
        message: "Ooos, shine your eyes, and check the url!!!"
    });
});

app.use((err, req, res, next) => {
    res.status(500).send({
        error: true,
        hardMessage: "This is a catch error",
        message: err.message
    });
});

app.listen(port, () => {
    console.log(`Gateway listening at http://localhost:${port}`)
})
