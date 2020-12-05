const express = require('express');
const fs = require('fs');
var path = require('path');
const router = express.Router();

// Get all info by id
router.get('/:car/:id', async (req, res) => {
  try {
    let name = req.params.car + '_page.json';
    var jsonPath = path.join(__dirname, '..', 'assets', 'pages', name);
    console.log(jsonPath);
    let rawdata = fs.readFileSync(jsonPath);
    let data = JSON.parse(rawdata);
    let car = data.filter(function (item) {
      return item.id == req.params.id;
    });
    res.send(car[0]);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
