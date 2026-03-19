# MEAN Stack Application Architecture

## 🏗️ System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                         CLIENT LAYER                             │
│                    (Angular Frontend)                            │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ HTTP Request/Response
                              │
┌─────────────────────────────────────────────────────────────────┐
│                      NETWORK LAYER                               │
│            REST API (Port 3000 / localhost:3000)                 │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ Express Routing
                              │
┌─────────────────────────────────────────────────────────────────┐
│                    SERVER LAYER                                  │
│                (Express.js Backend)                              │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │              API Routes                                 │   │
│  │  ├─ /api/users/register    └─→ User Controller         │   │
│  │  ├─ /api/users/login       └─→ User Controller         │   │
│  │  ├─ /api/products          └─→ Product Controller      │   │
│  │  └─ /api/orders            └─→ Order Controller        │   │
│  └─────────────────────────────────────────────────────────┘   │
│                              ↓                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │         Middleware Layer                                │   │
│  │  ├─ CORS Handler                                        │   │
│  │  ├─ Body Parser (JSON)                                  │   │
│  │  ├─ Error Handler                                       │   │
│  │  └─ Request Logger                                      │   │
│  └─────────────────────────────────────────────────────────┘   │
│                              ↓                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │        Data Validation Layer                            │   │
│  │  ├─ Input validation                                    │   │
│  │  ├─ Business logic validation                           │   │
│  │  └─ Authentication checks                               │   │
│  └─────────────────────────────────────────────────────────┘   │
│                              ↓                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │            Controller Layer                             │   │
│  │  ├─ UserController (Auth logic)                         │   │
│  │  ├─ ProductController (CRUD logic)                      │   │
│  │  └─ OrderController (Order management)                  │   │
│  └─────────────────────────────────────────────────────────┘   │
│                              ↓                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │              Model Layer                                │   │
│  │  ├─ Mongoose Schemas                                    │   │
│  │  ├─ Data validation rules                               │   │
│  │  └─ Database relationships                              │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ Mongoose ORM
                              │
┌─────────────────────────────────────────────────────────────────┐
│                   DATABASE LAYER                                │
│                  (MongoDB)                                      │
│                                                                 │
│  Collections:                                                   │
│  ├─ users      { _id, username, email, password, ... }        │
│  ├─ products   { _id, name, price, description, ... }         │
│  └─ orders     { _id, userId, productIds, status, ... }       │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📱 Frontend Component Hierarchy

```
App Component (Root)
│
├── Navbar
│   ├── Brand Logo
│   ├── Navigation Links
│   │   ├── Dashboard
│   │   ├── Products
│   │   ├── Login
│   │   └── Register
│   └── Logout Button
│
└── Router Outlet
    │
    ├── Route: / → Dashboard Component
    │   ├── Weather Card
    │   ├── Statistics Cards
    │   └── Welcome Section
    │
    ├── Route: /products → Product Component
    │   ├── Add Product Form
    │   └── Products Grid
    │       └── Product Cards
    │
    ├── Route: /login → Login Component
    │   └── Login Form
    │
    ├── Route: /register → Register Component
    │   └── Register Form
    │
    └── Footer
```

---

## 🔄 Data Flow Example: User Registration

```
1. User fills form in Register Component
   ↓
2. User clicks "Register" button
   ↓
3. Register Component validates input
   ├─ Check all fields filled
   └─ Check password strength (optional)
   ↓
4. Register Component calls AuthService.register()
   ↓
5. AuthService makes HTTP POST request
   │   POST /api/users/register
   │   Body: { username, email, password }
   ↓
6. Express Server receives request
   ├─ Parse JSON body
   └─ Route to User Controller
   ↓
7. User Controller
   ├─ Validate input
   ├─ Check if user exists
   ├─ Hash password with bcrypt
   ├─ Create new User document
   └─ Call User Model
   ↓
8. User Model saves to MongoDB
   ├─ Validate schema
   └─ Insert document
   ↓
9. MongoDB returns result
   ↓
10. Controller returns response
    ├─ Status 201 (Created)
    └─ Message: "User registered successfully"
    ↓
11. AuthService receives response
    ├─ Extract data
    └─ Return to Register Component
    ↓
12. Register Component
    ├─ Update UI
    ├─ Show success message
    └─ Redirect to login
```

---

## 🔐 Authentication Flow

```
┌──────────────────────────────────────────────────────────────┐
│                    REGISTRATION                              │
└──────────────────────────────────────────────────────────────┘

User Input → Validation → Hash Password → Save to DB → Success

┌──────────────────────────────────────────────────────────────┐
│                      LOGIN                                   │
└──────────────────────────────────────────────────────────────┘

User Input → Find User → Compare Hash → Generate Token → Store

┌──────────────────────────────────────────────────────────────┐
│                API REQUEST WITH TOKEN                        │
└──────────────────────────────────────────────────────────────┘

Frontend                          Backend
   │                                │
   ├─ HTTP Request ──────────────→ │
   │  Headers: {                   │
   │    Authorization: token       │
   │  }                            │
   │                               ├─ Verify Token
   │                               │
   │  Response ←────────────────── │
   │  Status: 200                  │
   │  Data: [results]              │
   │                               │
```

---

## 🗄️ Database Schema

### Users Collection
```javascript
{
  _id: ObjectId,
  username: String (unique),
  email: String (unique),
  password: String (hashed),
  createdAt: Date,
  updatedAt: Date
}
```

### Products Collection
```javascript
{
  _id: ObjectId,
  name: String (required),
  price: Number (required),
  description: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Orders Collection
```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: User),
  productIds: [ObjectId] (ref: Product),
  totalAmount: Number,
  status: String (enum: pending|completed|cancelled),
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🔌 API Endpoints

### User Endpoints
```
POST   /api/users/register
       Request: { username, email, password }
       Response: { message, user }

POST   /api/users/login
       Request: { username, password }
       Response: { token, user, message }
```

### Product Endpoints
```
GET    /api/products
       Response: [{ _id, name, price, description, ... }]

POST   /api/products
       Request: { name, price, description }
       Response: { _id, name, price, ... }

DELETE /api/products/:id
       Response: { message }
```

### Order Endpoints
```
GET    /api/orders
       Response: [{ _id, userId, productIds, totalAmount, ... }]

POST   /api/orders
       Request: { userId, productIds, totalAmount }
       Response: { _id, userId, productIds, ... }

PUT    /api/orders/:id
       Request: { status, ... }
       Response: { _id, status, ... }

DELETE /api/orders/:id
       Response: { message }
```

---

## 🌐 Request/Response Cycle

```
┌─────────────────────────────────────────────────────────────┐
│ 1. Browser makes HTTP Request                               │
│    GET /api/products HTTP/1.1                               │
│    Host: localhost:3000                                     │
│    Accept: application/json                                 │
└─────────────────────────────────────────────────────────────┘
                           │
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ 2. Express Route Handler                                     │
│    Matches: GET /api/products                               │
│    Calls: ProductController.getProducts()                   │
└─────────────────────────────────────────────────────────────┘
                           │
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ 3. Database Query                                            │
│    Model: Product.find()                                    │
│    MongoDB: return all products                             │
└─────────────────────────────────────────────────────────────┘
                           │
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ 4. Response Sent Back                                       │
│    HTTP/1.1 200 OK                                          │
│    Content-Type: application/json                           │
│    Body: [{ _id, name, price, ... }, ...]                  │
└─────────────────────────────────────────────────────────────┘
                           │
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ 5. Angular Receives Response                                │
│    HttpClient processes JSON                                │
│    Service returns Observable                               │
│    Component subscribes and updates UI                      │
└─────────────────────────────────────────────────────────────┘
```

---

## 📊 State Management (Frontend)

```
Component State (Local)
│
├─ form: { username, password, ... }
├─ loading: boolean
├─ error: string
├─ products: Array
└─ weather: Object

When User Interacts:
│
├─ User enters data in form
├─ Component validates
├─ Sets loading = true
├─ Calls Service
│
├─ Service makes HTTP request
│
├─ Response received
├─ Component updates state
├─ Template re-renders
└─ UI updates
```

---

## 🚀 Deployment Architecture

```
┌──────────────────────────────────────────────────────────┐
│                   PRODUCTION                             │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  Frontend (Netlify/Vercel)                              │
│  ├─ dist/frontend/ (Angular build output)               │
│  └─ serves on https://yourdomain.com                    │
│                                                          │
│  Backend (Heroku/AWS/DigitalOcean)                      │
│  ├─ Node.js server running Express.js                   │
│  └─ serves on https://api.yourdomain.com                │
│                                                          │
│  Database (MongoDB Atlas Cloud)                         │
│  ├─ MongoDB cluster                                     │
│  └─ Secured with IP whitelist                           │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

## 🔒 Security Considerations

```
Input Validation
├─ Client-side validation (Angular)
└─ Server-side validation (Express)

Authentication
├─ Password hashing (bcrypt)
├─ Token storage (localStorage)
└─ Secure password comparison

CORS
├─ Whitelist allowed origins
├─ Specify allowed methods
└─ Configure allowed headers

Database
├─ Connection string in .env
├─ Database access control
└─ Mongoose schema validation
```

---

## 📈 Performance Optimization

```
Frontend
├─ OnPush change detection
├─ Lazy loading routes
├─ Tree shaking unused code
└─ Production build minification

Backend
├─ Database indexing
├─ Request caching
├─ Middleware optimization
└─ Connection pooling

Network
├─ HTTP/2 compression
├─ Gzip compression
├─ CDN for static files
└─ API response pagination
```

---

*This architecture ensures scalability, maintainability, and performance.*
