var express = require('express');
var router = express.Router();

router.get('/get', function(req, res) {
    res.send({
        method: 'get'
    });
});

router.post('/post', function(req, res) {
    res.send({
        method: 'post',
        body: req.body
    });
});

router.delete('/delete/:id', function(req, res) {
    res.send({
        method: 'delete',
        body: req.params.id
    });
});
module.exports = router;