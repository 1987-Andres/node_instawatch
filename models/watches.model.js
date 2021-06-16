const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM instawatch.watches', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        })
    })
}

const getById = (pWatchId) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM instawatch.watches where id=?', [pWatchId], (err, rows) => {
            if (err) reject(err);
            if (rows.length !== 1) resolve(null);
            resolve(rows[0]);
        })
    })
}

module.exports = {
    getAll, getById
}