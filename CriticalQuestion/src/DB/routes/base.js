const express = require('express');

const router = express.Router();

router.get('/ping', (req, res) => {
    res.status(200).json({ serverTime: new Date().toISOString() });
});

router.use('/user', require('./user'));
router.use('/post', require('./post'));

router.get('*', (req, res) => res.status(404).json({ error: 'Endpoint not found.' }));

module.exports = router;
