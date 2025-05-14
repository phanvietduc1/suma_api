const express = require('express');
const router = express.Router();
const { items } = require('../data');

// Route lấy tất cả items
router.get('/', (req, res) => {
  res.json(items);
});

// Route lấy item theo ID
router.get('/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = items.find(item => item.id === itemId);
  
  if (!item) {
    return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
  }
  
  res.json(item);
});

// Route lấy items theo categoryId
router.get('/category/:categoryId', (req, res) => {
  const categoryId = parseInt(req.params.categoryId);
  const filteredItems = items.filter(item => item.categoryId === categoryId);
  
  res.json(filteredItems);
});

// Route cập nhật item theo ID
router.put('/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const itemData = req.body;
  
  const itemIndex = items.findIndex(item => item.id === itemId);
  
  if (itemIndex === -1) {
    return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
  }
  
  // Cập nhật thông tin sản phẩm
  items[itemIndex] = { ...items[itemIndex], ...itemData };
  
  res.json({ 
    message: "Cập nhật sản phẩm thành công", 
    item: items[itemIndex] 
  });
});

// Route xóa item theo ID
router.delete('/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  
  const itemIndex = items.findIndex(item => item.id === itemId);
  
  if (itemIndex === -1) {
    return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
  }
  
  // Xóa sản phẩm khỏi mảng
  const deletedItem = items[itemIndex];
  items.splice(itemIndex, 1);
  
  res.json({ 
    message: "Xóa sản phẩm thành công", 
    item: deletedItem 
  });
});

// Route thêm item mới
router.post('/', (req, res) => {
  const itemData = req.body;
  
  // Kiểm tra dữ liệu bắt buộc
  if (!itemData.thumbnail || !itemData.info || !itemData.categoryId) {
    return res.status(400).json({ message: "Thiếu thông tin bắt buộc (thumbnail, info, categoryId)" });
  }
  
  // Tạo ID mới (ID lớn nhất hiện tại + 1)
  const newId = items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1;
  
  // Tạo item mới với dữ liệu từ request
  const newItem = {
    id: newId,
    thumbnail: itemData.thumbnail,
    numbOfLike: itemData.numbOfLike || 0,
    shareLink: itemData.shareLink || `https://example.com/share/item${newId}`,
    info: itemData.info,
    categoryId: parseInt(itemData.categoryId)
  };
  
  // Thêm vào mảng items
  items.push(newItem);
  
  res.status(201).json({
    message: "Tạo sản phẩm mới thành công",
    item: newItem
  });
});

// Route tăng số lượt thích cho item
router.post('/:id/like', (req, res) => {
  const itemId = parseInt(req.params.id);
  
  const itemIndex = items.findIndex(item => item.id === itemId);
  
  if (itemIndex === -1) {
    return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
  }
  
  // Tăng số lượt thích
  items[itemIndex].numbOfLike = (items[itemIndex].numbOfLike || 0) + 1;
  
  res.json({ 
    message: "Đã tăng lượt thích", 
    item: items[itemIndex] 
  });
});

module.exports = router; 