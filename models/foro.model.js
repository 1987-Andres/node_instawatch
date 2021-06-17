const getAllPosts = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM instawatch.nuevo_post', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        })
    })
}
const getByCategoria = (pCategoria) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM instawatch.nuevo_post where categoria="${pCategoria}"`, (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        })
    })
}

const createPost = ({ titulo, descripcion, categoria }) => {
    return new Promise((resolve, reject) => {
        db.query(
            'insert into nuevo_post (titulo, descripcion, categoria) values(?,?,?)', [titulo, descripcion, categoria],
            (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
    });
}

module.exports = {
    getAllPosts, getByCategoria, createPost
}