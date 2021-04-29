var express = require('express');
var router = express.Router();


router.get("/soma/:a&:b", (req, res) => {
    const c = parseInt(req.params.a) + parseInt(req.params.b)
    res.send(c.toString())
  });

router.get("/sub/:a&:b", (req, res) => {
    const c = parseInt(req.params.a) - parseInt(req.params.b)
    res.send(c.toString())
});

router.get("/mul/:a&:b", (req, res) => {
    const c = parseInt(req.params.a) * parseInt(req.params.b)
    res.send(c.toString())
});

router.get("/div/:a&:b", (req, res) => {
    const c = parseInt(req.params.a) / parseInt(req.params.b)
    res.send(c.toString())
});

module.exports = router;