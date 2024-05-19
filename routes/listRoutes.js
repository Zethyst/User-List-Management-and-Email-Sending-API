const express = require('express');
const router = express.Router();
const List = require('../models/List');

router.post('/', async (req, res) => {
  try {
    const { title, customProperties } = req.body;
    const list = new List({ title, customProperties });
    await list.save();
    res.status(201).json(list);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
