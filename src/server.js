const express = require("express");
const server = express();
const db = require("./database/db.js");

server.use(express.static("public"));
server.use(express.urlencoded({ extended: true }));

// Template Engine
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
    express: server,
    noCache: true
});

server.get("/", (req, res) => {
    return res.render("index.html");
});

server.get("/create-point", (req, res) => {
    return res.render("create-point.html");
});

server.post("/save-point", (req, res) => {
    const query = `
        INSERT INTO places (
            name,
            image,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?, ?, ?, ?, ?, ?, ?);
    `

    const values = [
        req.body.name,
        req.body.image,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterIntsertData(err) {
        if (err) {
            return console.log(err);
        }

        console.log("Cadastro concluído com sucesso");
        console.log(this);

        return res.render("create-point.html", {saved: true});
    }

    db.run(query, values, afterIntsertData);
});

server.get("/search-results", (req, res) => {
    const search = req.query.search;

    db.all(`SELECT * FROM places WHERE city like '%${search}%'`, function(err, rows) {
        if (err) {
            return console.log(err);
        }

        const numberOfResults = rows.length;

        return res.render("search-results.html", { places: rows, numberOfResults: numberOfResults});
    });
});

server.listen(3000);