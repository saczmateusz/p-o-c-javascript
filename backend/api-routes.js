let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
        status: 'Default API Endpoint'
    });
});

var carController = require('./carController');

router.route('/cars')
    .get(carController.index)
    .post(carController.new);
router.route('/cars/:reg_no')
    .get(carController.view)
    .delete(carController.delete);

module.exports = router;