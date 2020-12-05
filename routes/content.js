const express = require('express');
const Content = require('../models/Content');
const router = express.Router();
const fs = require('fs');
var path = require('path');

const multiLang = async (cz, ru, en, category, id) => {
  let czData = await writeDataLang('cz', cz, category, id);
  let ruData = await writeDataLang('ru', ru, category, id);
  let enData = await writeDataLang('en', en, category, id);
  let czStringData = JSON.stringify(czData);
  let enStringData = JSON.stringify(enData);
  let ruStringData = JSON.stringify(ruData);
  console.log(ruStringData);
  let czPath = path.join(__dirname, '..', 'translation', `cz.json`);
  let ruPath = path.join(__dirname, '..', 'translation', `ru.json`);
  let enPath = path.join(__dirname, '..', 'translation', `en.json`);
  fs.writeFileSync(czPath, czStringData);
  fs.writeFileSync(ruPath, ruStringData);
  fs.writeFileSync(enPath, enStringData);
};

const writeDataLang = async (langName, lang, category, id) => {
  let thePath = path.join(__dirname, '..', 'translation', `${langName}.json`);
  let rawdata = await fs.readFileSync(thePath);
  let data = await JSON.parse(rawdata);
  for (let i = 0; i < lang.length; i++) {
    let item = lang[i];
    if (!data[category]) {
      data[category] = {};
    }
    if (data[category][id]) {
      if (item.value) {
        data[category][id][i] = item.value;
      }
    } else {
      if (item.value) {
        data[category][id] = {};
        data[category][id][i] = item.value;
      }
    }
  }
  return data;
};

const generateContent = (obj, category, id) => {
  for (let i = 0; i < obj.length; i++) {
    let item = obj[i];
    if (item.type != 'img') {
      item.value = `${category}.${id}.${i}`;
    }
  }
  return obj;
};

const transliterate = (word) => {
  var answer = '',
    a = {};
  a['Ё'] = 'YO';
  a['Й'] = 'I';
  a['Ц'] = 'TS';
  a['У'] = 'U';
  a['К'] = 'K';
  a['Е'] = 'E';
  a['Н'] = 'N';
  a['Г'] = 'G';
  a['Ш'] = 'SH';
  a['Щ'] = 'SCH';
  a['З'] = 'Z';
  a['Х'] = 'H';
  a['Ъ'] = '';
  a['ё'] = 'yo';
  a['й'] = 'i';
  a['ц'] = 'ts';
  a['у'] = 'u';
  a['к'] = 'k';
  a['е'] = 'e';
  a['н'] = 'n';
  a['г'] = 'g';
  a['ш'] = 'sh';
  a['щ'] = 'sch';
  a['з'] = 'z';
  a['х'] = 'h';
  a['ъ'] = '';
  a['Ф'] = 'F';
  a['Ы'] = 'I';
  a['В'] = 'V';
  a['А'] = 'a';
  a['П'] = 'P';
  a['Р'] = 'R';
  a['О'] = 'O';
  a['Л'] = 'L';
  a['Д'] = 'D';
  a['Ж'] = 'ZH';
  a['Э'] = 'E';
  a['ф'] = 'f';
  a['ы'] = 'y';
  a['в'] = 'v';
  a['а'] = 'a';
  a['п'] = 'p';
  a['р'] = 'r';
  a['о'] = 'o';
  a['л'] = 'l';
  a['д'] = 'd';
  a['ж'] = 'zh';
  a['э'] = 'e';
  a['Я'] = 'Ya';
  a['Ч'] = 'CH';
  a['С'] = 'S';
  a['М'] = 'M';
  a['И'] = 'I';
  a['Т'] = 'T';
  a['Ь'] = '';
  a['-'] = '';
  a['Б'] = 'B';
  a['Ю'] = 'YU';
  a['|'] = '';
  a['я'] = 'ya';
  a['ч'] = 'ch';
  a['с'] = 's';
  a['м'] = 'm';
  a['и'] = 'i';
  a['т'] = 't';
  a['ь'] = '';
  a['б'] = 'b';
  a['ю'] = 'yu';
  a[' '] = '-';
  a['!'] = '';
  a['?'] = '';
  for (let i = 0; i < word.length; i++) {
    if (word.hasOwnProperty(i)) {
      if (a[word[i]] === undefined) {
        answer += word[i];
      } else {
        answer += a[word[i]];
      }
    }
  }
  return answer;
};

// Get by id
router.get('/edit/:id', async (req, res) => {
  try {
    let content = await Content.find({ id: req.params.id });
    res.send(content);
  } catch (err) {
    console.log(err);
  }
});

// Get all
router.get('/:category', async (req, res) => {
  try {
    if (req.params.category == 'all') {
      let content = await Content.find({ category: { $ne: 'posts' } }).sort(
        '-content'
      );
      res.send(content);
    } else {
      let content = await Content.find({ category: req.params.category }).sort(
        '-content'
      );
      console.log(content);
      res.send(content);
    }
  } catch (err) {
    console.log(err);
  }
});

// Upload
router.post('/:category', async (req, res) => {
  try {
    let { cz, en, ru, preview } = req.body;
    let category = req.params.category;
    let id = en[0].value.toLowerCase();
    id = await transliterate(id);
    await multiLang(cz, ru, en, category, id);
    let content = await generateContent(cz, category, id);

    let title = content[0].value;
    let body = {
      id,
      category,
      title,
      preview,
      content,
    };
    let contentBase = new Content(body);
    contentBase.save();
    res.send('OK');
  } catch (err) {
    console.log(err);
  }
});

// Delete
router.delete('/:id', async (req, res) => {
  console.log('Delete service');
  try {
    await Content.deleteOne({ id: req.params.id });
    res.send('OK');
  } catch (err) {
    console.log(err);
  }
});

// Edit
router.put('/:id', async function (req, res) {
  console.log('Edit post');
  try {
    let { cz, en, ru, preview } = req.body;
    let contentBase = await Content.findOne({ id: req.params.id });
    let category = contentBase.category;
    let id = en[0].value.toLowerCase();
    id = await transliterate(id);
    await multiLang(cz, ru, en, category, id);
    let content = await generateContent(cz, category, id);
    let title = content[0].value;
    contentBase = {
      id,
      category,
      title,
      preview,
      content,
    };
    contentBase.save();
  } catch (err) {
    console.log(err);
  }
  res.send('OK');
});

module.exports = router;
