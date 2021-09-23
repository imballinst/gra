const dns = require("dns");
const express = require("express");

const cors = require("cors");
const { json, urlencoded } = require("body-parser");

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));

app.on("error", function onError(error) {
  console.error(error);
});

app.post("/ip", async (req, res) => {
  const responseData = {};

  try {
    const url = req.body.url;
    const ip = await lookupPromise(url);

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

// Don't exit on error.
process.on("uncaughtException", function () {});

async function lookupPromise(url) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);

    dns.resolve4(parsed.hostname, (err, addresses) => {
      if (err) reject(err);

      resolve(addresses[0]);
    });
  });
}
