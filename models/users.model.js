const { deleteById } = require("./foro.model")

const getAll = () => {
    return new Promise((resolve, reject) => {
        deleteById.query('SELECT * FROM heroku_bf6019206e7eabe.users', (err, rows) => {
            if (err) reject(err)
            resolve(rows);
        });
    })
}

const createClient = ({ nombre, apellidos, direccion, sexo, fecha_nacimiento, email, password, repite_password }) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO users (nombre, apellidos, direccion, sexo, fecha_nacimiento, email, password, repite_password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, )', [nombre, apellidos, direccion, sexo, fecha_nacimiento, email, password, repite_password], (err, result) => {
            if (err) reject(err)
            if (result) {
                resolve(result)
            };
        });
    });
};

const getByEmail = (pEmail) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM heroku_bf6019206e7eabe.nuevo_post where email="${pEmail}"`, (err, rows) => {
            if (err) reject(err);
            resolve(rows[0]);
        })
    })
}

module.exports = {
    getAll, createClient, getByEmail
}