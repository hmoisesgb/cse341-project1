const router = require('express').Router();

router.get('/', (rec,res) => { res.send('Hello World');});

router.use('/contacts', require('./contacts'));

module.exports = router;

