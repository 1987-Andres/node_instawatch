const getAllPosts = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM nuevo_post', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        })
    })
}
const getByCategoria = (pCategoria) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM nuevo_post where categoria="${pCategoria}"`, (err, rows) => {
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

const update = (pPostId, { titulo, descripcion, categoria }) => {
    return new Promise((resolve, reject) => {
        db.query(
            'UPDATE nuevo_post SET titulo=?, descripcion=?, categoria=? WHERE id=?',
            [titulo, descripcion, categoria, pPostId],
            (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
    });
}

const deleteByFk = (pDeleteFk) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM forum_respuestas where fk_post="${pDeleteFk}"`, (err, rows) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}

const getById = (pPostId) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM nuevo_post where id="${pPostId}"`, (err, rows) => {
            if (err) reject(err);
            resolve(rows[0]);
        });
    });
}

const createRespuesta = ({ descripcion, fk_post }) => {
    return new Promise((resolve, reject) => {
        db.query(
            'insert into forum_respuestas (descripcion, fk_post) values(?,?)', [descripcion, fk_post],
            (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
    });
}

const getRespuestasfk = (pRespuestaFk) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM forum_respuestas where fk_post="${pRespuestaFk}"`, (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
}
module.exports = {
    getAllPosts, getByCategoria, createPost, update, getById, createRespuesta, getRespuestasfk, deleteByFk
}