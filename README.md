<!-- ===================================================== -->
<!--                     ONEECART README                    -->
<!-- ===================================================== -->

<h1 align="center">
🛒 OneeCart
</h1>

<p align="center">

### Modern Full Stack MERN E-Commerce Platform

Secure • Fast • Responsive • Scalable • Production Ready

</p>

<p align="center">

<img src="assets/logo.png" width="140"/>

</p>

---

<p align="center">

![GitHub Repo stars](https://img.shields.io/github/stars/mahiiyyy/Onee-Cart?style=for-the-badge)

![GitHub forks](https://img.shields.io/github/forks/mahiiyyy/Onee-Cart?style=for-the-badge)

![GitHub issues](https://img.shields.io/github/issues/mahiiyyy/Onee-Cart?style=for-the-badge)

![GitHub last commit](https://img.shields.io/github/last-commit/mahiiyyy/Onee-Cart?style=for-the-badge)

![GitHub repo size](https://img.shields.io/github/repo-size/mahiiyyy/Onee-Cart?style=for-the-badge)

</p>

<p align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react)

![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js)

![ExpressJS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

![MongoDB](https://img.shields.io/badge/MongoDB-13AA52?style=for-the-badge&logo=mongodb)

![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=jsonwebtokens)

![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary)

![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase)

![Razorpay](https://img.shields.io/badge/Razorpay-0C65E9?style=for-the-badge&logo=razorpay)

</p>

---

# 🌐 Live Demo

### 🚀 Frontend

https://onee-cart-frontend.onrender.com

### 💻 Repository

https://github.com/mahiiyyy/Onee-Cart

---

# 📖 Table of Contents

- About Project
- Features
- Tech Stack
- Architecture
- Folder Structure
- Screenshots
- Installation
- Environment Variables
- API Documentation
- Security
- Performance
- Deployment
- Challenges
- What I Learned
- Future Enhancements
- Contributing
- Contact

---

# 🚀 About OneeCart

**OneeCart** is a production-ready **Full Stack E-Commerce Website** developed using the **MERN Stack**.

The application provides customers with a seamless shopping experience while giving administrators complete control over products, users, and orders through an advanced Admin Dashboard.

The project demonstrates modern software engineering practices including secure authentication, scalable REST APIs, cloud image management, payment gateway integration, responsive UI, and modular architecture.

---

# ⭐ Highlights

✅ Full Stack MERN Architecture

✅ Modern Responsive UI

✅ Google Authentication

✅ JWT Authentication

✅ Secure REST APIs

✅ Admin Dashboard

✅ Cloudinary Image Upload

✅ Razorpay Integration

✅ Cash On Delivery

✅ Search & Filter

✅ Mobile Responsive

✅ Protected Routes

✅ Production Ready

---

# ✨ Features

## 👤 User Features

- User Registration
- User Login
- Google Login (Firebase)
- JWT Authentication
- Secure Cookies
- Logout
- Product Listing
- Product Details
- Search Products
- Category Filter
- Men Collection
- Women Collection
- Kids Collection
- Shopping Cart
- Quantity Management
- Checkout
- Razorpay Payment
- Cash On Delivery
- Order History
- Order Tracking
- User Profile
- Responsive Design
- AI Chatbot

---

## 👨‍💼 Admin Features

- Beautiful Dashboard

- Add Products

- Delete Products

- View Product List

- Manage Orders

- Update Order Status

- Manage Users

- Revenue Dashboard

- Cloudinary Image Upload

- Multiple Product Images

- Protected Admin Routes

---

# 🛠 Tech Stack

## Frontend

| Technology | Purpose |
|------------|----------|
| React.js | User Interface |
| Tailwind CSS | Styling |
| React Router DOM | Routing |
| Axios | API Calls |
| Context API | Global State |
| Firebase | Google Authentication |

---

## Backend

| Technology | Purpose |
|------------|----------|
| Node.js | Runtime |
| Express.js | REST APIs |
| JWT | Authentication |
| Bcrypt | Password Encryption |
| Multer | File Upload |
| Cloudinary | Image Storage |

---

## Database

| Database |
|-----------|
| MongoDB Atlas |
| Mongoose ODM |

---

## Payment Gateway

- Razorpay

- Cash On Delivery

---

## Cloud Services

- Cloudinary

- MongoDB Atlas

- Render

---

# 🎯 Why This Project?

This project was built to understand how real-world E-Commerce platforms are developed using modern Full Stack technologies.

The project focuses on:

- Authentication & Authorization

- REST API Development

- Payment Gateway Integration

- Cloud Storage

- State Management

- Admin Panel Development

- Responsive Design

- Production Deployment

---

# 📈 Recruiter Highlights

✔ MERN Stack

✔ REST APIs

✔ JWT Authentication

✔ Razorpay Integration

✔ Cloudinary Integration

✔ Firebase Authentication

✔ Responsive UI

✔ Clean Code Architecture

✔ Production Deployment

✔ CRUD Operations

✔ Context API

✔ MongoDB Atlas

✔ Admin Dashboard

✔ Full Stack Development

✔ Scalable Folder Structure

---

# 🧠 Skills Demonstrated

- Full Stack Development

- Frontend Development

- Backend Development

- Database Design

- Authentication

- Authorization

- REST APIs

- Cloud Services

- Payment Integration

- Responsive UI Design

- API Integration

- Software Engineering Principles

---

# 🏗 Project Architecture

```text
                            ┌────────────────────────┐
                            │        Client          │
                            │     React + Tailwind   │
                            └───────────┬────────────┘
                                        │
                                   Axios Requests
                                        │
                                        ▼
                            ┌────────────────────────┐
                            │    Express REST API    │
                            │        Node.js         │
                            └──────┬─────┬───────────┘
                                   │     │
                  ┌────────────────┘     └────────────────┐
                  ▼                                       ▼
         MongoDB Atlas                            Cloudinary
      (Products, Users, Orders)                Product Images

                                   │
                                   ▼
                              Razorpay API
                           Payment Verification
```

---

# 📂 Project Structure

```text
OneeCart
│
├── frontend
│   ├── public
│   ├── src
│   │
│   ├── assets
│   ├── components
│   ├── context
│   ├── pages
│   ├── routes
│   ├── App.jsx
│   └── main.jsx
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── uploads
│   ├── utils
│   ├── server.js
│   └── package.json
│
├── admin
│   ├── src
│   ├── components
│   ├── pages
│   ├── App.jsx
│   └── main.jsx
│
└── README.md
```

---

# 📷 Application Preview



## 🏠 Home Page

```md
![Home](assets/screenshots/home.png)
```

---

## 🛍 Collections

```md
![Collections](assets/screenshots/collections.png)
```

---

## ⭐ Best Sellers

```md
![BestSeller](assets/screenshots/bestseller.png)
```

---

## 👕 Product Details

```md
![Product](assets/screenshots/product.png)
```

---

## 🛒 Shopping Cart

```md
![Cart](assets/screenshots/cart.png)
```

---

## 💳 Checkout

```md
![Checkout](assets/screenshots/checkout.png)
```

---

## 🔐 Login

```md
![Login](assets/screenshots/login.png)
```

---

## 📝 Signup

```md
![Signup](assets/screenshots/signup.png)
```

---

## 📦 My Orders

```md
![Orders](assets/screenshots/orders.png)
```

---

## 👨‍💼 Admin Dashboard

```md
![Dashboard](assets/screenshots/dashboard.png)
```

---

## ➕ Add Product

```md
![Add Product](assets/screenshots/addproduct.png)
```

---

## 📦 Product List

```md
![Products](assets/screenshots/productlist.png)
```

---

## 🚚 Manage Orders

```md
![Admin Orders](assets/screenshots/adminorders.png)
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/mahiiyyy/Onee-Cart.git

cd Onee-Cart
```

---

## Install Frontend

```bash
cd frontend

npm install
```

---

## Install Backend

```bash
cd backend

npm install
```

---

## Install Admin Panel

```bash
cd admin

npm install
```

---

# ▶ Run Frontend

```bash
cd frontend

npm run dev
```

---

# ▶ Run Backend

```bash
cd backend

npm run server
```

---

# ▶ Run Admin

```bash
cd admin

npm run dev
```

---

# 🌍 Environment Variables

Create a `.env` file inside the **backend** folder.

```env
PORT=8000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

CLOUDINARY_NAME=your_cloudinary_name

CLOUDINARY_API_KEY=your_cloudinary_api_key

CLOUDINARY_SECRET=your_cloudinary_secret

RAZORPAY_KEY_ID=your_key

RAZORPAY_SECRET=your_secret

FIREBASE_API_KEY=your_firebase_key
```

---

# 📁 Assets Folder

```text
assets/

├── banner.png

├── logo.png

└── screenshots

      ├── home.png
      ├── collections.png
      ├── bestseller.png
      ├── product.png
      ├── cart.png
      ├── checkout.png
      ├── login.png
      ├── signup.png
      ├── orders.png
      ├── dashboard.png
      ├── addproduct.png
      ├── productlist.png
      └── adminorders.png
```

---

# 📦 Deployment

| Service | Platform |
|----------|----------|
| Frontend | Render |
| Backend | Render |
| Database | MongoDB Atlas |
| Images | Cloudinary |

---

# 📱 Responsive Design

✔ Desktop

✔ Laptop

✔ Tablet

✔ Mobile

✔ Cross Browser Compatible

---

# 📡 REST API Documentation

The backend follows RESTful API principles for scalable and maintainable development.

---

## 🔐 Authentication APIs

| Method | Endpoint | Description | Protected |
|--------|----------|-------------|-----------|
| POST | `/api/auth/register` | Register a new user | ❌ |
| POST | `/api/auth/login` | Login user | ❌ |
| POST | `/api/auth/logout` | Logout user | ✅ |
| GET | `/api/auth/profile` | Get user profile | ✅ |
| POST | `/api/auth/google` | Google Login | ❌ |

---

## 👕 Product APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/product/list` | Fetch all products |
| GET | `/api/product/:id` | Fetch single product |
| GET | `/api/product/search` | Search products |
| GET | `/api/product/category/:category` | Category filter |
| POST | `/api/product/add` | Add product |
| PUT | `/api/product/update/:id` | Update product |
| DELETE | `/api/product/delete/:id` | Delete product |

---

## 🛒 Cart APIs

| Method | Endpoint |
|--------|----------|
| GET | `/api/cart/get` |
| POST | `/api/cart/add` |
| PUT | `/api/cart/update` |
| DELETE | `/api/cart/remove` |
| DELETE | `/api/cart/clear` |

---

## 📦 Order APIs

| Method | Endpoint |
|--------|----------|
| POST | `/api/order/place` |
| POST | `/api/order/verify` |
| POST | `/api/order/cod` |
| GET | `/api/order/userorders` |
| GET | `/api/order/all` |
| PUT | `/api/order/status` |

---

## 👨‍💼 Admin APIs

| Method | Endpoint |
|--------|----------|
| POST | `/api/admin/login` |
| GET | `/api/admin/dashboard` |
| GET | `/api/admin/orders` |
| GET | `/api/admin/products` |
| POST | `/api/admin/add-product` |
| DELETE | `/api/admin/delete-product/:id` |
| PUT | `/api/admin/update-product/:id` |

---

# 🔐 Authentication Flow

```text
User
 │
 ▼
Login / Signup
 │
 ▼
Express API
 │
 ▼
JWT Token Generated
 │
 ▼
Stored in Cookies
 │
 ▼
Protected Routes
 │
 ▼
Authorized User
```

---

# 🔒 Security Features

## Authentication

- JWT Authentication
- Firebase Google Login
- Protected Routes
- Admin Middleware
- Secure Cookies

---

## Password Security

- Password Hashing using bcrypt
- Encrypted Password Storage
- No Plain Text Passwords

---

## API Security

- Authentication Middleware
- Authorization Middleware
- Route Protection
- Error Handling
- Request Validation

---

## Database Security

- MongoDB Atlas
- Environment Variables
- Secure Database Connection
- Mongoose Validation

---

## Cloud Security

- Cloudinary Secure Upload
- Image Validation
- File Type Validation

---

## Payment Security

- Razorpay Signature Verification
- Secure Payment Confirmation
- Order Verification

---

# ⚡ Performance Optimizations

### Frontend

- Component Reusability
- Context API State Management
- Lazy Rendering
- Optimized API Calls
- Responsive Layout
- Optimized Images

---

### Backend

- Modular Folder Structure
- REST API Design
- Async/Await
- Error Middleware
- Database Optimization

---

### Database

- Indexed Collections
- Optimized Queries
- Mongoose Models

---

### Cloudinary

- Image Compression
- CDN Delivery
- Fast Loading Images

---

# 📊 Database Collections

```text
MongoDB

├── Users

├── Products

├── Orders

├── Cart

└── Admin
```

---

# 💳 Payment Workflow

```text
User

↓

Checkout

↓

Select Payment Method

↓

───────────────

Razorpay

↓

Payment Success

↓

Verify Payment

↓

Create Order

───────────────

OR

───────────────

Cash On Delivery

↓

Place Order

↓

Order Confirmed
```

---

# ☁ Cloudinary Workflow

```text
Admin

↓

Upload Product Images

↓

Multer Middleware

↓

Cloudinary

↓

Image URL

↓

MongoDB

↓

Frontend Display
```

---

# 🧩 Core Functionalities

✅ User Authentication

✅ Google Authentication

✅ Product Search

✅ Category Filter

✅ Product Details

✅ Shopping Cart

✅ Quantity Management

✅ Checkout

✅ Razorpay Payment

✅ Cash On Delivery

✅ Order Management

✅ Admin Dashboard

✅ Product Management

✅ Image Upload

✅ Responsive UI

---

# 📈 Project Statistics

| Category | Status |
|-----------|--------|
| Frontend | ✅ Completed |
| Backend | ✅ Completed |
| Admin Panel | ✅ Completed |
| Authentication | ✅ Completed |
| Database | ✅ Completed |
| Payments | ✅ Completed |
| Deployment | ✅ Completed |
| Mobile Responsive | ✅ Completed |
| Cloudinary | ✅ Completed |
| Firebase | ✅ Completed |

---

# 🧪 Testing Checklist

- ✅ User Registration
- ✅ Login
- ✅ Google Login
- ✅ JWT Authentication
- ✅ Product Listing
- ✅ Search
- ✅ Category Filter
- ✅ Add to Cart
- ✅ Quantity Update
- ✅ Remove from Cart
- ✅ Checkout
- ✅ Razorpay Payment
- ✅ COD Order
- ✅ Order History
- ✅ Admin Login
- ✅ Add Product
- ✅ Delete Product
- ✅ Manage Orders
- ✅ Cloudinary Upload
- ✅ Responsive Design

---

# 🚀 Future Enhancements

The following features are planned for future releases to make **OneeCart** more powerful and scalable.

## 🛍 Shopping Experience

- ❤️ Wishlist
- ⭐ Product Ratings & Reviews
- 📝 Product Review System
- 🎁 Coupon & Discount System
- 🎟 Referral Program
- 📦 Recently Viewed Products
- 🔥 Trending Products
- 💖 Favorite Products
- 📢 Product Recommendations using AI

---

## 🤖 AI Features

- AI Shopping Assistant
- AI Product Recommendation Engine
- AI Search Suggestions
- Smart Product Comparison
- Personalized Shopping Experience

---

## 📱 User Features

- Email Verification
- Forgot Password
- Reset Password
- Mobile OTP Login
- Push Notifications
- User Addresses
- Multiple Shipping Addresses
- Order Tracking Timeline

---

## 👨‍💼 Admin Features

- Sales Analytics
- Revenue Dashboard
- Inventory Management
- Stock Alerts
- User Management
- Coupon Management
- Banner Management
- Sales Reports

---

# 💡 Challenges Faced

Developing OneeCart involved solving several real-world engineering challenges.

### 🔐 Authentication

- Implementing secure JWT Authentication
- Google Authentication using Firebase
- Protecting Admin Routes
- Handling secure cookies and sessions

---

### ☁ Cloudinary Integration

- Uploading multiple product images
- Managing image URLs
- Handling upload errors
- Image optimization

---

### 💳 Razorpay Integration

- Creating payment orders
- Payment verification
- Signature validation
- Secure checkout workflow

---

### 🛒 Shopping Cart

- Cart synchronization
- Quantity updates
- Persistent cart state
- Price calculations

---

### 📦 Order Management

- Order placement
- Payment verification
- Order history
- Order status updates

---

### 🎨 Frontend

- Responsive Design
- State Management using Context API
- API Integration
- Component Reusability

---

# 📚 What I Learned

Building this project significantly improved my understanding of Full Stack Development.

## Frontend

- React.js
- Component Architecture
- Context API
- React Router
- Axios
- Tailwind CSS
- Responsive UI

---

## Backend

- Node.js
- Express.js
- REST APIs
- Middleware
- Authentication
- Authorization
- Error Handling

---

## Database

- MongoDB Atlas
- Mongoose
- Schema Design
- CRUD Operations
- Relationships

---

## Authentication

- JWT
- Firebase Authentication
- Protected Routes
- bcrypt Password Hashing

---

## Cloud Services

- Cloudinary
- Image Upload
- Environment Variables
- Deployment

---

## Payment

- Razorpay Integration
- Payment Verification
- Secure Transactions

---

## Software Engineering

- Clean Code
- Modular Architecture
- Scalable Folder Structure
- Git & GitHub
- Deployment
- API Testing

---

# 🚀 Deployment

| Service | Platform |
|----------|----------|
| Frontend | Render |
| Backend | Render |
| Database | MongoDB Atlas |
| Images | Cloudinary |

---

# 🤝 Contributing

Contributions are always welcome!

## Steps

1. Fork the Repository

```bash
git fork
```

2. Clone Repository

```bash
git clone https://github.com/mahiiyyy/Onee-Cart.git
```

3. Create Branch

```bash
git checkout -b feature-name
```

4. Commit Changes

```bash
git commit -m "Added New Feature"
```

5. Push

```bash
git push origin feature-name
```

6. Create Pull Request

---

# 📜 License

This project is licensed under the **MIT License**.

You are free to use, modify, and distribute this project under the terms of the MIT License.

---

# 👨‍💻 Developer

## Mahi Rajput

🎓 B.Tech – Computer Science & Business Systems

💻 Full Stack Web Developer

🎨 UI/UX Enthusiast

🚀 MERN Stack Developer

---

## 📫 Connect With Me

### 🌐 GitHub

https://github.com/mahiiyyy

---

### 💼 LinkedIn

https://www.linkedin.com/in/mahii-rajput

---

### 📧 Email

mahirajput0710@gmail.com

---

# 🙏 Acknowledgements

Special thanks to the amazing technologies and communities that made this project possible.

- React.js
- Node.js
- Express.js
- MongoDB Atlas
- Cloudinary
- Firebase
- Razorpay
- Tailwind CSS
- GitHub
- Render

---

# ⭐ If You Like This Project

If you found this project helpful:

⭐ Star this Repository

🍴 Fork the Repository

🛠 Contribute to the Project

📢 Share it with Others

---

# 📊 GitHub Stats

> Replace **YOUR_USERNAME** with **mahiiyyy**.

```md
![GitHub Stats](https://github-readme-stats.vercel.app/api?username=mahiiyyy&show_icons=true&theme=tokyonight)

![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=mahiiyyy&layout=compact&theme=tokyonight)

![GitHub Streak](https://streak-stats.demolab.com?user=mahiiyyy&theme=tokyonight)

![Profile Views](https://komarev.com/ghpvc/?username=mahiiyyy&color=blue)
```

---

# 🏆 Repository Highlights

✅ Full Stack MERN Application

✅ Production Ready

✅ Clean Code Architecture

✅ Responsive Design

✅ JWT Authentication

✅ Firebase Google Login

✅ Cloudinary Image Upload

✅ Razorpay Integration

✅ RESTful APIs

✅ MongoDB Atlas

✅ Admin Dashboard

✅ Modern UI with Tailwind CSS

---

# 💼 Recruiter Notes

This project demonstrates practical experience with:

- Full Stack Development
- REST API Design
- Authentication & Authorization
- Payment Gateway Integration
- Cloud Image Management
- Database Design
- Responsive UI Development
- State Management
- Production Deployment
- Software Engineering Best Practices

---

<h3 align="center">
⭐ Thank you for visiting OneeCart ⭐
</h3>

<p align="center">
Built with ❤️ by <b>Mahi Rajput</b>
</p>
