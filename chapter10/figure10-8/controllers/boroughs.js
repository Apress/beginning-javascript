const router = require('express').Router();
const pool = require('../data/config');

router.get('/', (req, res) => {   
    pool.query('SELECT * FROM boroughs', (error, result) => { 
        if (error) throw error;
        res.send(result); 
    });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;

    pool.query('SELECT name, state FROM boroughs WHERE id = ?', id, (error, result) => {
        if (error) throw error;
        res.send(result); 
    });
});

module.exports = router;