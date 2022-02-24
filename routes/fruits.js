const express = require('express');
const { getAll, deleteFruit } = require('../controller/fruitsController');

const router = express.Router();

// get all route
router.get('/', getAll);

// delete route
router.delete('/:name', deleteFruit);

module.exports = { router };
