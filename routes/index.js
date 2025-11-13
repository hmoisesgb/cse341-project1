const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/', (rec,res) => { 
    //#swagger.tags=['Hello World']
    res.send('Hello World');
});

router.use('/contacts', require('./contacts'));

module.exports = router;

