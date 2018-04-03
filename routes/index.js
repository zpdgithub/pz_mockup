var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send('hello, express');
});

router.get('/users/:name', function(req, res) {
    res.send({
        title: 'hello',
        name: req.params.name
    });
});

router.get('/search', function(req, res) {
    res.send([{
        id: {
            videoId: '1'
        },
        snippet: {
            title: '视频1',
            description: '视频1描述',
            thumbnails: {
                high: {
                    url: 'video1_url'
                }
            }

        }
    }, {
        id: {
            videoId: '2'
        },
        snippet: {
            title: '视频2',
            description: '视频2描述',
            thumbnails: {
                high: {
                    url: 'video2_url'
                }
            }

        }
    }]);
});
module.exports = router;