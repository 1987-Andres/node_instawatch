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
        db.query(`SELECT * FROM instawatch.watches where watch_brand="${pWatchBrand}"`, (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        })
    })
}

const create = ({ watch_brand, watch_model, release_year, market_price, retail_price, owner, availability, notes, box_included, assignment_date, features, family, movement, purchase_year, limited, material, diameter, dial_color, imagen }) => {
    return new Promise((resolve, reject) => {
        db.query(
            'insert into watches (watch_brand, watch_model, release_year, market_price, retail_price, owner, availability, notes, box_included, assignment_date, features, family, movement,purchase_year, limited, material, diameter, dial_color, imagen) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)',
            [watch_brand, watch_model, release_year, market_price, retail_price, owner, availability, notes, box_included, assignment_date, features, family, movement, purchase_year, limited, material, diameter, dial_color, imagen],
            (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
    });
}

module.exports = {
    getAll, getByMarca, create
}