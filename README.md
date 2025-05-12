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

## 📸 Screenshots
<img width="1512" alt="Screenshot 2025-05-12 at 1 28 14 AM" src="https://github.com/user-attachments/assets/45e704f0-950e-4892-bfa7-62c92845e54c" />
<img width="1512" alt="Screenshot 2025-05-12 at 1 29 41 AM" src="https://github.com/user-attachments/assets/b3f20704-de52-4426-b5f7-64800b5054c0" />
<img width="1512" alt="Screenshot 2025-05-12 at 1 29 48 AM" src="https://github.com/user-attachments/assets/b25ffb54-edf6-4c9d-91db-744dbf320752" />
<img width="1512" alt="Screenshot 2025-05-12 at 1 30 19 AM" src="https://github.com/user-attachments/assets/09178e5f-232f-426b-a9ee-3a00d793dbeb" />
<img width="1512" alt="Screenshot 2025-05-12 at 1 30 57 AM" src="https://github.com/user-attachments/assets/e14933a7-9b55-4251-b656-ee8443d1580f" />
<img width="1512" alt="Screenshot 2025-05-12 at 1 31 47 AM" src="https://github.com/user-attachments/assets/e4ec3e5a-d404-4f98-a870-1cb4cc7cd4e4" />
<img width="1512" alt="Screenshot 2025-05-12 at 1 32 01 AM" src="https://github.com/user-attachments/assets/8e915fd1-dbb0-4e47-9e6a-192ee5c33058" />
<img width="1512" alt="Screenshot 2025-05-12 at 1 32 31 AM" src="https://github.com/user-attachments/assets/e4f50926-fb00-4a54-8cc2-e98d1cb57c89" />
<img width="1512" alt="Screenshot 2025-05-12 at 1 33 05 AM" src="https://github.com/user-attachments/assets/d81fbf66-00dd-4b49-8cd7-e365361d20eb" />
<img width="1512" alt="Screenshot 2025-05-12 at 1 33 31 AM" src="https://github.com/user-attachments/assets/16544aef-481a-48e1-be88-7bb9eb1223e4" />
<img width="1512" alt="Screenshot 2025-05-12 at 1 35 44 AM" src="https://github.com/user-attachments/assets/c3f58122-f20d-4715-a4c6-dce39001e8a0" />
<img width="1133" alt="Screenshot 2025-05-12 at 1 36 22 AM" src="https://github.com/user-attachments/assets/093713ab-6358-43b5-8062-bf73dd6705e9" />
<img width="1133" alt="Screenshot 2025-05-12 at 1 36 36 AM" src="https://github.com/user-attachments/assets/2c39b117-edf5-49ef-b83e-92437a430a95" />
<img width="1512" alt="Screenshot 2025-05-12 at 1 40 22 AM" src="https://github.com/user-attachments/assets/b971891f-c015-454d-b2ff-f23ea2dd9917" />


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
[Portfolio](https://mdnoorahmed.com)  |  [LinkdIn]([https://github.com/MdNoorAhmed](https://github.com/MdNoorAhmed))

---

## 📜 License
This project is licensed under the MIT License.
