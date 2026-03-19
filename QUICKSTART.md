# MEAN Stack Quick Start Guide 🚀

## ⚡ Start the Application in 5 Minutes

### Step 1: Backend Setup (Terminal 1)

```bash
cd backend
npm install
npm start
```

**Expected Output:**
```
🚀 Server running on port 3000
📍 API URL: http://localhost:3000
🏥 Health Check: http://localhost:3000/health
💾 MongoDB Connected ✅
```

### Step 2: Frontend Setup (Terminal 2)

```bash
cd frontend
npm install
ng serve
```

**Expected Output:**
```
✔ Compiled successfully.
Local:   http://localhost:4200/
```

### Step 3: Open Application

Open your browser and navigate to:
```
http://localhost:4200
```

---

## 🧪 Test the Application

### 1. Create an Account
- Click **Register** button
- Fill in username, email, and password
- Click **Register**

### 2. Login
- Go to **Login** page
- Enter your credentials
- Wait for success message

### 3. Create a Product
- Navigate to **Products** page
- Fill in product details (Name, Price, Description)
- Click **Add Product**

### 4. View Dashboard
- Go to **Dashboard** page
- See weather information and stats

---

## 🔧 Troubleshooting

### Backend won't start
```bash
# Check if port 3000 is free
netstat -ano | findstr :3000

# If needed, change port in server.js:
const PORT = 3001; // Change to different port
```

### Frontend won't start
```bash
# Clear cache and reinstall
rm -r node_modules package-lock.json
npm install
ng serve --port 4300  # Different port if 4200 is busy
```

### MongoDB connection error
```
✗ MongoDB Error: MongooseError [MongoServerError]

💡 Solution:
1. Check connection string in backend/config/db.js
2. Ensure MongoDB is running
3. Whitelist your IP in MongoDB Atlas (if using cloud)
```

### CORS Error in Browser Console
```
Access to XMLHttpRequest... has been blocked by CORS

💡 Solution: Already configured in backend/server.js
If still getting error, ensure backend is running on http://localhost:3000
```

---

## 📱 API Testing

### Using cURL Commands

**Health Check:**
```bash
curl http://localhost:3000/health
```

**Register User:**
```bash
curl -X POST http://localhost:3000/api/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "email": "test@example.com",
    "password": "password123"
  }'
```

**Login User:**
```bash
curl -X POST http://localhost:3000/api/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "password": "password123"
  }'
```

**Get All Products:**
```bash
curl http://localhost:3000/api/products
```

**Create Product:**
```bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Laptop",
    "price": 999.99,
    "description": "High-performance laptop"
  }'
```

### Using Postman
1. Import `backend/` as a collection
2. Set up environment variables:
   - `BASE_URL`: http://localhost:3000
   - `API_TOKEN`: (set after login)
3. Run requests against the backend

---

## 📊 Project Statistics

| Component | Count |
|-----------|-------|
| Angular Components | 4 |
| Services | 3 |
| API Routes | 12+ |
| CSS Files | 6 |
| Controllers | 3 |
| MongoDB Models | 3 |
| Total Files | 50+ |

---

## ✨ Features to Try

### Authentication System
- ✅ Register with validation
- ✅ Secure password hashing
- ✅ Login with token storage
- ✅ Logout functionality

### Product Management  
- ✅ Add products
- ✅ View product list
- ✅ Delete products
- ✅ Real-time updates

### Dashboard
- ✅ Weather information
- ✅ Statistics cards
- ✅ Welcome section
- ✅ System status

### UI/UX
- ✅ Responsive design
- ✅ Modern gradient theme
- ✅ Smooth animations
- ✅ Error messages
- ✅ Loading states

---

## 🚀 Next Steps

1. **Add JWT Authentication**
   - Install `jsonwebtoken` package
   - Implement token validation middleware

2. **Database Optimization**
   - Add indexes to MongoDB collections
   - Implement pagination for products

3. **Frontend Features**
   - Add product search and filter
   - Implement order history
   - User profile management

4. **Testing**
   - Unit tests with Jasmine
   - E2E tests with Cypress
   - Backend API tests with Jest

5. **Deployment**
   - Deploy backend to Heroku/AWS
   - Deploy frontend to Netlify/Vercel
   - Set up CI/CD pipeline

---

## 📞 Support

If you encounter issues:
1. Check the terminal output for error messages
2. Verify MongoDB connection
3. Ensure ports 3000 and 4200 are available
4. Clear browser cache and restart
5. Check network tab in browser DevTools

---

**Happy coding! 🎉**
