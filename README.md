# MEAN Stack Application 🚀

A complete **MEAN Stack** (MongoDB, Express, Angular, Node.js) web application with user authentication, product management, and weather dashboard.

## 📋 Features

- ✅ User Registration & Login
- ✅ Product Management (CRUD operations)
- ✅ Order Management
- ✅ Weather Dashboard
- ✅ Responsive UI with Modern Design
- ✅ MongoDB Database Integration
- ✅ RESTful API with Express.js
- ✅ Angular 19+ with Standalone Components
- ✅ CORS Enabled
- ✅ Error Handling & Validation

## 🏗️ Project Structure

```
mean-test/
├── backend/
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── controllers/
│   │   ├── user.controller.js
│   │   ├── product.controller.js
│   │   └── order.controller.js
│   ├── models/
│   │   ├── user.model.js
│   │   ├── product.model.js
│   │   └── order.model.js
│   ├── routes/
│   │   ├── user.routes.js
│   │   ├── product.routes.js
│   │   └── order.routes.js
│   ├── package.json
│   └── server.js              # Express server
│
└── frontend/
    ├── src/
    │   ├── app/
    │   │   ├── components/
    │   │   │   ├── login/
    │   │   │   ├── register/
    │   │   │   ├── product/
    │   │   │   └── dashboard/
    │   │   ├── services/
    │   │   │   ├── auth.ts
    │   │   │   ├── product.ts
    │   │   │   └── weather.ts
    │   │   ├── app.ts
    │   │   ├── app.routes.ts
    │   │   └── app.config.ts
    │   └── main.ts
    └── angular.json
```

## 🛠️ Technology Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL Database
- **Mongoose** - ODM for MongoDB
- **bcrypt** - Password hashing
- **CORS** - Cross-Origin Resource Sharing
- **body-parser** - Request parsing

### Frontend
- **Angular 19+** - Frontend framework
- **TypeScript** - Type-safe JavaScript
- **RxJS** - Reactive programming
- **Bootstrap-like Styling** - Custom CSS
- **HttpClient** - API communication

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB account (MongoDB Atlas or local instance)

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Update MongoDB connection string in `config/db.js`:
```javascript
const uri = "your_mongodb_connection_string";
```

4. Start the backend server:
```bash
npm start
```

The backend will run on `http://localhost:3000`

**API Endpoints:**
- `GET /health` - Health check
- `GET /` - Welcome message
- `POST /api/users/register` - Register user
- `POST /api/users/login` - Login user
- `GET /api/products` - Get all products
- `POST /api/products` - Create product
- `DELETE /api/products/:id` - Delete product
- `GET /api/orders` - Get all orders
- `POST /api/orders` - Create order

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
ng serve
```

or

```bash
npm start
```

The frontend will run on `http://localhost:4200`

## 🔐 Authentication

The application uses a simple token-based authentication system:

1. Register at `/register` with username, email, and password
2. Login at `/login` with username and password
3. Token is stored in localStorage on successful login
4. Use token for authenticated API requests

## 🌤️ Weather API

The dashboard fetches weather data from OpenWeatherMap:
- Current setup: Bangalore weather
- Update API key in `frontend/src/app/services/weather.ts`
- Get your API key from [openweathermap.org](https://openweathermap.org/api)

## 📝 API Request Examples

### Register User
```bash
POST http://localhost:3000/api/users/register
Content-Type: application/json

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "secure_password"
}
```

### Create Product
```bash
POST http://localhost:3000/api/products
Content-Type: application/json

{
  "name": "Laptop",
  "price": 999.99,
  "description": "High-performance laptop"
}
```

## 🎨 UI/UX Features

- **Modern Gradient Design** - Purple and gradient color scheme
- **Responsive Layout** - Works on all device sizes
- **Card-based Components** - Clean and organized presentation
- **Form Validation** - Input validation and error messages
- **Loading States** - User feedback during API calls
- **Navigation Bar** - Easy navigation between pages
- **Stat Dashboard** - Quick overview of key metrics

## 🐛 Common Issues & Solutions

### MongoDB Connection Error
- Ensure MongoDB is running
- Check connection string in `backend/config/db.js`
- Whitelist IP address in MongoDB Atlas (if using cloud)

### CORS Error
- Backend already has CORS enabled
- Check that backend is running on port 3000

### Port Already in Use
- Change port: `ng serve --port 4300`
- Backend: Update PORT in `server.js`

### Module Not Found
- Ensure dependencies are installed: `npm install`
- Clear node_modules and reinstall if issues persist

## 📱 Testing Recommendations

1. **Backend**: Use Postman or cURL to test API endpoints
2. **Frontend**: Use Angular DevTools browser extension
3. **Database**: Use MongoDB Compass for database inspection

## 🚀 Deployment

### Deploy Backend (Node.js)
- Heroku, AWS, DigitalOcean, Vercel
- Set environment variables for MongoDB URI
- Build: `npm start`

### Deploy Frontend (Angular)
- Netlify, Vercel, AWS S3, GitHub Pages
- Build: `ng build`
- Deploy the `dist/` folder

## 📄 License

MIT License - Feel free to use this project for learning and development.

## 👤 Author

Created as a complete MEAN stack example application.

## 🤝 Contributing

Feel free to fork, modify, and improve this project!

---

**Happy Coding! 🎉**
