const express = require('express');
const router = express.Router();
const { users } = require('../data');

// Route trả dữ liệu users
router.get('/', (req, res) => {
  res.json(users);
});

// Route cập nhật dữ liệu user theo ID
router.put('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userData = req.body;
  
  const userIndex = users.findIndex(user => user.id === userId);
  
  if (userIndex === -1) {
    return res.status(404).json({ message: "Không tìm thấy người dùng" });
  }
  
  // Cập nhật thông tin người dùng
  users[userIndex] = { ...users[userIndex], ...userData };
  
  res.json({ 
    message: "Cập nhật thành công", 
    user: users[userIndex] 
  });
});

// Route xóa dữ liệu user theo ID
router.delete('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  
  const userIndex = users.findIndex(user => user.id === userId);
  
  if (userIndex === -1) {
    return res.status(404).json({ message: "Không tìm thấy người dùng" });
  }
  
  // Xóa người dùng khỏi mảng
  const deletedUser = users[userIndex];
  users.splice(userIndex, 1);
  
  res.json({ 
    message: "Xóa người dùng thành công", 
    user: deletedUser 
  });
});

// Route thêm dữ liệu user mới
router.post('/', (req, res) => {
  const userData = req.body;
  
  // Kiểm tra dữ liệu bắt buộc
  if (!userData.name || !userData.email || !userData.password) {
    return res.status(400).json({ message: "Thiếu thông tin bắt buộc (name, email, password)" });
  }
  
  // Tạo ID mới (ID lớn nhất hiện tại + 1)
  const newId = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
  
  // Tạo user mới với dữ liệu từ request
  const newUser = {
    id: newId,
    name: userData.name,
    email: userData.email,
    password: userData.password,
    sex: userData.sex || 0,
    countryCode: userData.countryCode || 84,
    phone: userData.phone || 0,
    playlist: userData.playlist || []
  };
  
  // Thêm vào mảng users
  users.push(newUser);
  
  res.status(201).json({
    message: "Tạo người dùng mới thành công",
    user: newUser
  });
});

module.exports = router; 