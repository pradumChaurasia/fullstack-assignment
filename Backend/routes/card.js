const express = require('express');
const { createCard, getAllCards, getCardByTitle } = require('../controllers/card');

const router = express.Router();

router.post('/cards', createCard)

router.get('/cards',getAllCards)

router.get('/cards/:title', getCardByTitle)


module.exports = router;
