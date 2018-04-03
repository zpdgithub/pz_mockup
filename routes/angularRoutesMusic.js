var express = require('express');
var router = express.Router();

var tracks = {
    items: [{
            id: 1,
            name: 'A',
            artists: [{
                id: 1,
                name: 'Tom'
            }],
            album: {
                id: 1,
                name: 'album1',
                images: [{
                    url: '/resources/images/1.jpg'
                }]
            }
        },
        {
            id: 2,
            name: 'B',
            artists: [{
                id: 1,
                name: 'Jack'
            }],
            album: {
                id: 2,
                name: 'album2',
                images: [{
                    url: '/resources/images/2.jpg'
                }]
            }
        }
    ]
};
router.get('/search', function(req, res) {
    res.send({
        tracks: tracks
    });
});
router.get('/tracks/:id', function(req, res) {
    res.send(tracks.items[req.params.id - 1]);
});

module.exports = router;