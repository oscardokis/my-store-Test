const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send("Hola soy usuario");
});
router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId: categoryId,
    productId: productId
});
});

module.exports = router;
