const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const connectDB = require('./config/db');

const app = express();

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect DB
connectDB();

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'API is running 🚀', timestamp: new Date() });
});

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to MEAN Stack API 🚀', version: '1.0.0' });
});

// Routes
const productRoutes = require('./routes/product.routes');
const userRoutes = require('./routes/user.routes');
const orderRoutes = require('./routes/order.routes');

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

// Error handling middleware
app.use((err, req, res, next) => {  console.error('Error:', err);  res.status(err.status || 500).json({    error: err.message || 'Internal Server Error',    status: err.status || 500 });});// 404 handlerapp.use((req, res) => {  res.status(404).json({ error: 'Route not found', path: req.path });});const PORT = process.env.PORT || 3000;app.listen(PORT, () => {  console.log(`\🚀 Server running on port ${PORT}`);  console.log(`📍 API URL: http://localhost:${PORT}`);  console.log(`🏥 Health Check: http://localhost:${PORT}/health\`);});