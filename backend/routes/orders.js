const { Router } = require ('express');
const router = new Router();
const { uuid } = require('uuidv4');

//db
const { db } = require('./../db');

//Routes
router.post('/', (req, res) => {
    // Gets a random number between 10-15
    function minutes(min, max) {
    min = 10;
    max = 15;
    return Math.floor(Math.random() * (max - min + 1) + min);
    }
    let order = {
        //What the order contains
        items: req.body.items,
        orderNum: uuid(),
        arrival: minutes()
    }
    //Pushes the order and details to db
    db.get('orders').push(order).write()
    res.send({orderNum: 'Ordernummer: ' + order.orderNum, arrival: order.arrival })
})

module.exports = router;