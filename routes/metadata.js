var express = require('express');
var router = express.Router();

metadata = { "metadata": [
  {
    "ID": "123",
    "data": {
      "title": "Cat picture",
      "type": "object",
      "properties": {
          "name": {
              "type": "string",
              "description": "A picture of a cat"
          },
          "description": {
              "type": "string",
              "description": "Chonky cat"
          },
          "image": {
              "type": "string",
              "description": "https://www.sunnyskyz.com/uploads/2020/07/gb98d-chonky-manggo-3a.jpg"
          }
      },
    }
  },
  {
    "ID": "321",
    "data": {
      "title": "Dog picture",
      "type": "object",
      "properties": {
          "name": {
              "type": "string",
              "description": "A picture of a dog"
          },
          "description": {
              "type": "string",
              "description": "Pleasant dog"
          },
          "image": {
              "type": "string",
              "description": "https://i0.wp.com/cyclingindependent.com/wp-content/uploads/2020/11/RUR-Dog-2.jpg?resize=750%2C430&ssl=1"
          }
      }
    }
  }
]}

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  out = {};
  console.log(metadata);
  for(data of metadata.metadata) {
    if(data.ID==req.params.id) {
      out=data.data;
    }
  }
  res.send(out);
});

module.exports = router;
