const createClient = ({ nombre, apellidos, direccion, sexo, fecha_nacimiento, email, password, repite_password }) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO heroku_bf6019206e7eabe.users (nombre, apellidos, direccion, sexo, fecha_nacimiento, email, password, repite_password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [nombre, apellidos, direccion, sexo, fecha_nacimiento, email, password, repite_password], (err, result) => {
            if (err) reject(err)
            if (result) {
                resolve(result)
            };
        });
    });
};

const getByEmail = (pEmail) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM heroku_bf6019206e7eabe.users where email="${pEmail}"`, (err, rows) => {
            if (err) reject(err);
            resolve(rows[0]);
        })
    })
}

const getById = (pId) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM heroku_bf6019206e7eabe.users where id="${pId}"`, (err, rows) => {
            if (err) reject(err);
            resolve(rows[0]);
        });
    });
}

module.exports = {
    createClient, getByEmail, getById
}