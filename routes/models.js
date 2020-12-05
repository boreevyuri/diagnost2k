const express = require('express');
const fs = require('fs');
var path = require('path');
const router = express.Router();

// Get all info cars
router.get('/:mark', async (req, res) => {
  try {
    let name = req.params.mark + '_models.json';
    var jsonPath = path.join(__dirname, '..', 'assets', 'models', name);
    console.log(jsonPath);
    let rawdata = fs.readFileSync(jsonPath);
    let data = JSON.parse(rawdata);
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
