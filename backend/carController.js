Car = require('./carModel');

exports.index = function (req, res) {
    Car.get(function (err, cars) {
        if (err) {
            res.json({
                status: "Error",
                message: err,
            });
        }
        res.json({
            status: "Success",
            message: "Cars retrieved successfully",
            data: cars
        });
    });
};

exports.new = function (req, res) {
    console.log(res);
    console.log(req.body);
    var car = new Car();
    car.reg_no = req.body.reg_no ? req.body.reg_no : car.reg_no;
    car.brand = req.body.brand;
    car.model = req.body.model;
    car.year = req.body.year;
    car.color = req.body.color;
    car.fuel = req.body.fuel;

    car.save(function (err) {
        if (err)
            res.send(err);
        res.json({
            message: 'New car created!',
            data: car
        });
    });
};

exports.view = function (req, res) {
    Car.findById(req.params.car_id, function (err, car) {
        if (err)
            res.send(err);
        res.json({
            message: 'Car details loading..',
            data: car
        });
    });
};

exports.delete = function (req, res) {
    Car.remove({
        reg_no: req.params.reg_no
    }, function (err, car) {
        if (err)
            res.send(err);
        res.json({
            status: "Success",
            message: 'Car deleted'
        });
    });
};