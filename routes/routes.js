const express = require("express")
const router = new express.Router()
const ExpressError = require("../expressError")
const axios = require("axios")

router.post('/', async function(req, res, next) {
  const data = []
    try {
      for(let d of req.body.developers) {
        const res = await axios.get(`https://api.github.com/users/${d}`);
        data.push(res)
      }
      const out = data.map(r => ({ name: r.data.name, bio: r.data.bio }));
      return res.send(JSON.stringify(out));
    } catch(err) {
      next(err);
    }
  });

  module.exports = router