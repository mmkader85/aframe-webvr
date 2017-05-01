/**
 * Created by mmkad on 01-May-17.
 */

var express = require('express');
var router = express.Router();

router.get('/basic', function(req, res, next) {
    res.render(
        'basic',
        {
            'title': 'Basic aframe webvr'
        }
    );
});

router.get('/scene', function(req, res, next) {
    res.render(
        'scene',
        {
            'title': 'Build scene in VR using aframe webvr'
        }
    );
});

router.get('/background', function(req, res, next) {
    res.render(
        'background',
        {
            'title': 'Applying a background to the scene'
        }
    );
});

module.exports = router;