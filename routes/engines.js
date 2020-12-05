const express = require('express');
const fs = require('fs');
var path = require('path');
const router = express.Router();

// Get all info cars
router.get('/:mark/:model', async (req, res) => {
  console.log('Got it');
  try {
    let name = req.params.mark + '_engines.json';
    var jsonPath = path.join(__dirname, '..', 'assets', 'engines', name);
    let rawdata = fs.readFileSync(jsonPath);
    let data = JSON.parse(rawdata);
    let engines = data.filter(function (item) {
      return item.model == req.params.model;
    });
    console.log(engines);
    res.send(engines);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
