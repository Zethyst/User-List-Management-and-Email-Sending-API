const express = require('express');
const multer = require('multer');
const csvParser = require('csv-parser');
const List = require('../models/List');
const User = require('../models/User');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/:listId/upload', upload.single('file'), async (req, res) => {
  const { listId } = req.params;
  const file = req.file;

  try {
    const list = await List.findById(listId);
    if (!list) {
      return res.status(404).json({ error: 'List not found' });
    }

    const users = [];
    const errors = [];
    const Emails = new Set();

    require('fs').createReadStream(file.path)
      .pipe(csvParser())
      .on('data', (row) => {
        const { name, email, ...customProps } = row;

        if (!name || !email) {
          errors.push({ row, error: 'Name and email are required' });
          return;
        }

        if (Emails.has(email)) {
          errors.push({ row, error: 'Duplicate email' });
          return;
        }

        const properties = {};
        for (const prop of list.customProperties) {
          properties[prop.title] = customProps[prop.title] || prop.fallback;
        }

        users.push({ listId, name, email, properties });
        Emails.add(email);
      })
      .on('end', async () => {
        try {
          await User.insertMany(users);
          res.json({ success: users.length, errors, total: await User.countDocuments({ listId }) });
        } catch (error) {
          res.status(400).json({ error: error.message });
        }
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
