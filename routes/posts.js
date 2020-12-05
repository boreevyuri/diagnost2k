const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

// Get all
router.get('/', async (req, res) => {
  console.log('Posts working');
  try {
    var status = false;
    let posts = await Post.find();
    if (posts.length != 0) status = true;
    const body = {
      posts,
      status,
    };
    res.send(body);
  } catch (err) {
    console.log(err);
  }
});

// Get post by id
router.get('/:id', async (req, res) => {
  try {
    let post = await Post.findOne({ id: req.params.id });
    res.send(post);
  } catch (err) {
    console.log(err);
  }
});

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

// Upload post
router.post('/', async (req, res) => {
  try {
    let { name, preview, content } = req.body;
    let id = name.toLowerCase();
    id = await transliterate(id);
    let body = {
      id,
      name,
      preview,
      content,
    };
    let post = new Post(body);
    post.save();
  } catch (err) {
    console.log(err);
  }
});

// Delete post
router.delete('/:id', async (req, res) => {
  console.log('Delete post');
  try {
    await Post.deleteOne({ id: req.params.id });
    res.send('OK');
  } catch (err) {
    console.log(err);
  }
});

// Edit post
router.put('/:id', async function (req, res) {
  console.log('Edit post');
  try {
    let post = await Post.findOne({ id: req.params.id });
    let { name, preview, content } = req.body;
    let id = name.toLowerCase().split(' ').join('-');
    id = await transliterate(id);
    post.id = id;
    post.name = name;
    post.preivew = preview;
    post.content = content;
    post.save();
  } catch (err) {
    console.log(err);
  }
  res.send('OK');
});

module.exports = router;
