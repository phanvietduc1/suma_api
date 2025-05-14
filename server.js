const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');

app.use(cors());
// Middleware để cho phép nhận dữ liệu JSON
app.use(express.json());

// Route cơ bản
app.get('/', (req, res) => {
  res.send('API đang hoạt động!');
});

// Import và sử dụng routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

const catRoutes = require('./routes/catRoutes');
app.use('/api/cats', catRoutes);

const itemRoutes = require('./routes/itemRoutes');
app.use('/api/items', itemRoutes);

const liveItemRoutes = require('./routes/liveItemRoutes');
app.use('/api/liveItems', liveItemRoutes);

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});