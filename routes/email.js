const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Mailing
router.post('/', async (req, res) => {
  console.log('Mailing');
  const transporter = await nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'wrkonly.antsotnikov@gmail.com',
      pass: 'Asus080102',
    },
  });

  var name = '';
  var phone = '';
  var com_method = '';
  var service = '';
  var text = '';

  if (req.body.name) {
    name = req.body.name;
  }
  if (req.body.phone) {
    phone = req.body.phone;
  }
  if (req.body.com_method) {
    com_method = req.body.com_method;
  }
  if (req.body.service) {
    service = req.body.service;
  }
  if (req.body.text) {
    text = req.body.text;
  }

  let html = `
    <ul>
      <p>Name: <b>${name}</b></p>
      <p>Phone: <b>${phone} ${com_method}</b></p>
      <p>Service: <b>${service}</b></p>
      <p><b>${text}</b></p>
    </ul>
  `;

  let info = await transporter.sendMail({
    from: '"ПОЧТОВЫЙ ДУХ 👻" <helper@diagnost2k.cz>', // sender address
    to: 'geka1607@gmail.com', // list of receivers,
    subject: `😎 Diagnost2k | Новый клиент по имени ${req.body.name}`, // Subject line
    text: '', // plain text body
    html: html, // html body
  });

  res.send('OK');
});

module.exports = router;
