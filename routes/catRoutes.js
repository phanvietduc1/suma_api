const express = require('express');
const router = express.Router();
const { categories } = require('../data');

// Route lấy tất cả categories
router.get('/', (req, res) => {
  res.json(categories);
});

// Route lấy category theo ID
router.get('/:id', (req, res) => {
  const categoryId = parseInt(req.params.id);
  const category = categories.find(cat => cat.id === categoryId);
  
  if (!category) {
    return res.status(404).json({ message: "Không tìm thấy danh mục" });
  }
  
  res.json(category);
});

module.exports = router; 