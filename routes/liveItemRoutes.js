const express = require('express');
const router = express.Router();
const { liveItems } = require('../data');

// Route to get all live items
router.get('/', (req, res) => {
  res.json(liveItems);
});

// Route to get a specific live item by ID
router.get('/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const liveItem = liveItems.find(item => item.id === itemId);
  
  if (!liveItem) {
    return res.status(404).json({ message: "Không tìm thấy live item" });
  }
  
  res.json(liveItem);
});

// Route to create a new live item
router.post('/', (req, res) => {
  const itemData = req.body;
  
  // Validate required fields
  if (!itemData.shareLink) {
    return res.status(400).json({ message: "Thiếu thông tin bắt buộc (shareLink)" });
  }
  
  // Create new ID (max ID + 1)
  const newId = liveItems.length > 0 ? Math.max(...liveItems.map(item => item.id)) + 1 : 1;
  
  // Create new live item
  const newItem = {
    id: newId,
    shareLink: itemData.shareLink
  };
  
  // Add to liveItems array
  liveItems.push(newItem);
  
  res.status(201).json({
    message: "Tạo live item mới thành công",
    item: newItem
  });
});

// Route to update a live item
router.put('/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const itemData = req.body;
  
  const itemIndex = liveItems.findIndex(item => item.id === itemId);
  
  if (itemIndex === -1) {
    return res.status(404).json({ message: "Không tìm thấy live item" });
  }
  
  // Update live item
  liveItems[itemIndex] = { ...liveItems[itemIndex], ...itemData };
  
  res.json({
    message: "Cập nhật thành công",
    item: liveItems[itemIndex]
  });
});

// Route to delete a live item
router.delete('/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  
  const itemIndex = liveItems.findIndex(item => item.id === itemId);
  
  if (itemIndex === -1) {
    return res.status(404).json({ message: "Không tìm thấy live item" });
  }
  
  // Delete the live item
  const deletedItem = liveItems[itemIndex];
  liveItems.splice(itemIndex, 1);
  
  res.json({
    message: "Xóa live item thành công",
    item: deletedItem
  });
});

module.exports = router; 