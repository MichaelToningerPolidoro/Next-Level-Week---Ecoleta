const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./src/database/database.db");

module.exports = db;

//db.serialize( () => {
    // CREATE TABLE
    /*db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            image TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `);

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
        "Papersider",
        "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        "Guilherme Gemballa, Jardim América",
        "Nº 260",
        "Santa Catarina",
        "Rio do Sul",
        "Resíduos Eletrônicos, Lâmpadas"
    ]

    function afterIntsertData(err) {
        if (err) {
            return console.log(err);
        }

        console.log("Cadastro concluído com sucesso");
        console.log(this);
    }*/

    //INSERT INTO
    //db.run(query, values, afterIntsertData);

    //SELECT
    /*db.all(`SELECT * FROM places`, function(err, rows) {
        if (err) {
            return console.log(err);
        }

        console.log("Aqui estão os registros requeridos.");
        console.log(rows);
    });*/

    // DELETE
    /*db.run(`DELETE FROM places where (id = ?);`, [1], function(err) {
        if (err) {
            return console.log(err);
        }

        console.log("Dados apagados com SUCESSO!");
    });*/
//});
