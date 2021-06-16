const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM instawatch.watches', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        })
    })
}

const getByMarca = (pWatchBrand) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM instawatch.watches where watch_brand="?"', [pWatchBrand], (err, rows) => {
            if (err) reject(err);
            if (rows.length !== 1) resolve(null);
            resolve(rows[0]);
        })
    })
}

const create = ({ nombre, experiencia }) => {
    return new Promise((resolve, reject) => {
        db.query(
            'insert into watches (watch_brand, watch_model, release_year, market_price, retail_price, owner, availability, notes, box_included, assignment_date, features, family, movement,purchase_year, limited, material, diameter, dial_color) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [watch_brand, watch_model, release_year, market_price, retail_price, owner, availability, notes, box_included, assignment_date, features, family, movement, purchase_year, limited, material, diameter, dial_color],
            (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
    });
}

module.exports = {
    getAll, getByMarca, create
}