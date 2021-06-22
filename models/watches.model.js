const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM watches', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        })
    })
}

const getByMarca = (pWatchBrand) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM watches where watch_brand="${pWatchBrand}"`, (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        })
    })
}

const create = ({ watch_brand, watch_model, fk_owner, availability, notes, movement, material, dial_color, imagen }) => {
    return new Promise((resolve, reject) => {
        db.query(
            'insert into watches (watch_brand, watch_model, fk_owner, availability, notes, movement, material, dial_color, imagen) values(?, ?, ?, ?, ?, ?, ?, ?, ?)', [watch_brand, watch_model, fk_owner, availability, notes, movement, material, dial_color, imagen],
            (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
    });
}


const getById = (pWatchId) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM watches where id="${pWatchId}"`, (err, rows) => {
            if (err) reject(err);
            if (rows.length !== 1) resolve(null);
            resolve(rows);
        })
    });
}

const getByUser = (pFk_owner) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM watches WHERE fk_owner="${pFk_owner}"`, (err, rows) => {
            if (err) reject(err);
            if (rows.length !== 1) resolve(null);
            resolve(rows[0]);
        })
    });
}



module.exports = {
    getAll, getByMarca, create, getById, getByUser
}