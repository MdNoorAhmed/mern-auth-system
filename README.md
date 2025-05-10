# MERN Auth System 🔐

A full-featured authentication system built using the **MERN stack** (MongoDB, Express, React, Node.js). It includes user registration, login, email verification, password reset, protected routes, and JWT-based session handling with secure cookies.

---

## 🚀 Features

- ✅ JWT-based login and registration
- ✅ Password hashing with bcryptjs
- ✅ HTTP-only cookie authentication
- ✅ Email verification using 6-digit OTP (via Nodemailer)
- ✅ Password reset with OTP
- ✅ Responsive, animated frontend with Tailwind CSS
- ✅ Toast notifications via React Toastify
- ✅ Protected routes & middleware auth
- ✅ Neon-style documentation page
- ✅ Modular, scalable folder structure

---

## 📁 Folder Structure

```bash
mern-auth-system/
├── client/                 # React Frontend (Vite)
│   ├── public/
│   ├── src/
│   │   ├── assets/        # Images and icons
│   │   ├── context/       # AppContext provider
│   │   ├── pages/         # React route pages
│   │   ├── App.jsx        # Routes
│   │   └── main.jsx
│   └── vite.config.js
├── server/                 # Express Backend
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── config/
│   ├── index.js
│   └── .env
└── README.md
```

---

## ⚙️ Technologies Used

### Frontend
- React (Vite)
- Tailwind CSS
- React Router DOM
- Axios
- React Toastify

### Backend
- Node.js
- Express.js
- Mongoose (MongoDB)
- bcryptjs
- jsonwebtoken
- cookie-parser
- dotenv
- Nodemailer

---

## 🔧 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/mern-auth-system.git
cd mern-auth-system
```

### 2. Backend Setup
```bash
cd server
npm install
cp .env.example .env    # Add your Mongo URI, JWT secret, SMTP config
npm run dev
```

### 3. Frontend Setup
```bash
cd client
npm install
npm run dev
```

> Your app will run at `http://localhost:5173` with the backend running on `http://localhost:4000`

---

## 📧 Email Configuration (SMTP)
Update the `.env` file in the server directory with:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@email.com
SMTP_PASS=yourpassword
```
Use [App Passwords](https://support.google.com/accounts/answer/185833) for Gmail or any SMTP service.

---

## 🔐 Auth Flow Overview

1. User signs up with name, email, and password
2. Password is hashed with bcrypt
3. JWT token is issued and stored in HTTP-only cookie
4. OTP is sent to user email for verification
5. Protected routes check for valid JWT token

---

## 📄 Documentation
See full documentation at `/docs` route in your app.
- System architecture
- API endpoints
- Frontend + backend logic
- Error handling
- Tech stack

---

## 🧠 Resources Used

- YouTube: CodeWithHarry, LamaDev, NetNinja
- MDN Docs
- Stack Overflow
- Tailwind CSS Docs
- JWT.io
- Postman

---

## 💡 Future Enhancements
- ✅ Animated loading states
- ✅ User avatars
- ✅ Email template themes
- ⏳ Social login (Google, GitHub)
- ⏳ Admin dashboard panel

---

## 🧑‍💻 Author
**Md Noor Ahmed**  
[Portfolio](https://mdnoorahmed.com)  |  [GitHub](https://github.com/MdNoorAhmed)

---

## 📜 License
This project is licensed under the MIT License.
