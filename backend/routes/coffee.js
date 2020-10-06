const { Router } = require ('express');
const router = new Router();

//db
const { db } = require('./../db');

//Routes
router.get('/', (req, res) => {
    let menu = db.get('menu').value()
    res.send(menu)
});

module.exports = router;