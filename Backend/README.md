# 🏥 Hospital Management System - Backend

Node.js + Express + MongoDB + JWT se bana hua complete backend.

---

## 📁 Folder Structure

```
hospital-backend/
├── config/
│   └── db.js              → MongoDB connection
├── models/
│   ├── User.js            → Auth user model
│   ├── Doctor.js          → Doctor model
│   ├── Patient.js         → Patient model
│   ├── Appointment.js     → Appointment model
│   ├── Staff.js           → Staff model
│   ├── Billing.js         → Billing model
│   └── Contact.js         → Contact/Query model
├── middleware/
│   └── authMiddleware.js  → JWT protect + adminOnly
├── controllers/
│   ├── authController.js
│   ├── doctorController.js
│   ├── patientController.js
│   ├── appointmentController.js
│   ├── staffController.js
│   ├── billingController.js
│   └── contactController.js
├── routes/
│   ├── authRoutes.js
│   ├── doctorRoutes.js
│   ├── patientRoutes.js
│   ├── appointmentRoutes.js
│   ├── staffRoutes.js
│   ├── billingRoutes.js
│   └── contactRoutes.js
├── .env
├── server.js              → Main entry point
├── package.json
└── frontend-api.js        → Frontend me copy karo src/api/auth.js mein
```

---

## ⚙️ Setup & Run

### 1. Dependencies install karo
```bash
cd hospital-backend
npm install
```

### 2. MongoDB install karo (agar nahi hai)
- Local: https://www.mongodb.com/try/download/community
- Ya MongoDB Atlas (free cloud): https://www.mongodb.com/atlas

### 3. .env file update karo
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/hospitalDB
JWT_SECRET=hospital_jwt_super_secret_key_2024
JWT_EXPIRE=7d
```
> MongoDB Atlas use kar rahe ho toh MONGO_URI mein apna connection string daalo.

### 4. Server start karo
```bash
# Development (auto-restart)
npm run dev

# Production
npm start
```

Server chalega: `http://localhost:5000`

---

## 🔗 All API Endpoints

### 🔐 Auth Routes
| Method | URL | Description | Auth |
|--------|-----|-------------|------|
| POST | /api/auth/signup | User register | Public |
| POST | /api/auth/signin | User login | Public |
| POST | /api/auth/register | Contact form | Public |
| GET | /api/auth/dashboard | Dashboard info | JWT Token |
| GET | /api/auth/profile | User profile | JWT Token |

### 👨‍⚕️ Doctor Routes
| Method | URL | Description | Auth |
|--------|-----|-------------|------|
| GET | /api/doctors | All doctors | Public |
| GET | /api/doctors/:id | Single doctor | Public |
| POST | /api/doctors | Add doctor | Admin JWT |
| PUT | /api/doctors/:id | Update doctor | Admin JWT |
| DELETE | /api/doctors/:id | Delete doctor | Admin JWT |

### 🤒 Patient Routes
| Method | URL | Auth |
|--------|-----|------|
| GET | /api/patients | JWT Token |
| POST | /api/patients | Admin JWT |
| PUT | /api/patients/:id | Admin JWT |
| DELETE | /api/patients/:id | Admin JWT |

### 📅 Appointment Routes
| Method | URL | Auth |
|--------|-----|------|
| GET | /api/appointments | JWT Token |
| POST | /api/appointments | JWT Token |
| PUT | /api/appointments/:id | Admin JWT |
| DELETE | /api/appointments/:id | Admin JWT |

### 👥 Staff Routes
| Method | URL | Auth |
|--------|-----|------|
| GET | /api/staff | JWT Token |
| POST | /api/staff | Admin JWT |
| PUT | /api/staff/:id | Admin JWT |
| DELETE | /api/staff/:id | Admin JWT |

### 💰 Billing Routes
| Method | URL | Auth |
|--------|-----|------|
| GET | /api/billing | JWT Token |
| GET | /api/billing/summary | Admin JWT |
| POST | /api/billing | Admin JWT |
| PUT | /api/billing/:id | Admin JWT |
| DELETE | /api/billing/:id | Admin JWT |

### 📩 Contact/Query Routes
| Method | URL | Auth |
|--------|-----|------|
| POST | /api/contact | Public |
| GET | /api/contact | Admin JWT |
| PUT | /api/contact/:id | Admin JWT |
| DELETE | /api/contact/:id | Admin JWT |

---

## 🔐 JWT Usage

Login karne ke baad token milega. Usse header mein bhejo:

```
Authorization: Bearer <your_token_here>
```

---

## 🖥️ Frontend Connect Karo

1. `frontend-api.js` file ka content copy karo
2. Frontend ke `src/api/auth.js` mein paste karo
3. Vite proxy setup karo (`vite.config.js`):

```js
export default {
  server: {
    proxy: {
      '/api': 'http://localhost:5000'
    }
  }
}
```

---

## 👑 Admin User Banana

MongoDB mein directly ek user ka role "admin" karo:

```js
// MongoDB Compass ya mongosh mein:
db.users.updateOne({ email: "admin@hospital.com" }, { $set: { role: "admin" } })
```

Ya signup ke baad Compass se change kar do.

---

## ✅ Test with Postman

**Signup:**
```json
POST http://localhost:5000/api/auth/signup
{
  "name": "Admin User",
  "email": "admin@hospital.com",
  "password": "123456"
}
```

**Login:**
```json
POST http://localhost:5000/api/auth/signin
{
  "email": "admin@hospital.com",
  "password": "123456"
}
```
Response mein `token` milega — use karo baaki sab requests mein.
