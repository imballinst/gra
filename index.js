const express = require('express');

const dns = require('dns');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 4000;

const app = express();

app.use(
  cors({
    origin: '*',
    allowedHeaders: '*',
    methods: '*'
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/', async (req, res) => {
  const responseData = {};

  try {
    const url = req.body.url;
    const parsed = new URL(url);

    const ip = await lookupPromise(parsed.hostname);

    responseData.data = { ip };
  } catch (err) {
    console.error(err);
    responseData.error = { message: err.message };
  }

  res.json(responseData);
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

async function lookupPromise(url) {
  return new Promise((resolve, reject) => {
    dns.lookup(url, (err, address, family) => {
      if (err) reject(err);
      resolve(address);
    });
  });
}
