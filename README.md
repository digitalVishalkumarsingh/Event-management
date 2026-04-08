<div align="center">

# 🎉 EventKiya — Event Management Platform

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-22-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Express-4-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Razorpay-Payment-02042B?style=for-the-badge&logo=razorpay&logoColor=white" />
  <img src="https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white" />
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" />
</p>

**A full-stack event management web application** for booking, managing, and showcasing events — with online payments, email notifications, vendor management, and a modern responsive UI.

[🚀 Live Demo](#) · [📖 API Docs](#-api-endpoints) · [🐛 Report Bug](https://github.com/digitalVishalkumarsingh/Event-management/issues) · [💡 Request Feature](https://github.com/digitalVishalkumarsingh/Event-management/issues)

</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#%EF%B8%8F-tech-stack)
- [📁 Project Structure](#-project-structure)
- [⚙️ Getting Started](#%EF%B8%8F-getting-started)
- [🔑 Environment Variables](#-environment-variables)
- [📡 API Endpoints](#-api-endpoints)
- [🐳 Docker Deployment](#-docker-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🔐 **Authentication** | JWT-based register & login with bcrypt password hashing |
| 📅 **Event Booking** | Book events with service selection, guest count & token payment |
| 💳 **Razorpay Payments** | Secure online payment integration for token amounts |
| 📧 **Email Notifications** | Auto-confirmation emails via Gmail/Nodemailer on contact & booking |
| 🗓️ **Upcoming Events** | View all registered events in a responsive card grid |
| 🖼️ **Photo Gallery** | Large photo gallery with 250+ event images |
| 🎬 **Video Gallery** | Showcases event highlight videos |
| 🏪 **Vendor Management** | Vendor store creation with service filtering (DJ, Catering, Photography, etc.) |
| 📬 **Contact Form** | Contact form with DB persistence and email acknowledgement |
| 🛡️ **Security** | Helmet.js headers, CORS, env-based secrets, no hardcoded credentials |
| 🐳 **Docker Ready** | Dockerfiles for both backend (Node) and frontend (Nginx) |
| 📱 **Responsive UI** | Fully responsive with Tailwind CSS — mobile-first design |

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| React 18 | UI framework |
| React Router DOM v7 | Client-side routing |
| Tailwind CSS 3 | Utility-first styling |
| Axios | HTTP client |
| React Icons | Icon library |
| React Alice Carousel | Image carousel |

### Backend
| Technology | Purpose |
|-----------|---------|
| Node.js 22 | Runtime |
| Express 4 | Web framework |
| MongoDB Atlas + Mongoose 8 | Database & ODM |
| JSON Web Token (JWT) | Authentication |
| bcryptjs | Password hashing |
| Nodemailer | Email service |
| Razorpay | Payment gateway |
| Helmet.js | HTTP security headers |
| express-validator | Input validation |
| dotenv | Environment configuration |

---

## 📁 Project Structure

```
Event-Management/
├── Backend/                      # Node.js + Express API
│   ├── Controllers/
│   │   ├── usercontroller.js     # Register & Login
│   │   ├── paymentcontroller.js  # Razorpay order creation
│   │   ├── ordercontroller.js    # Event order booking
│   │   ├── Contactcontollers.js  # Contact form + email
│   │   └── vendor-store.js       # Vendor CRUD
│   ├── Model/
│   │   ├── userSchema.js         # User model + JWT method
│   │   ├── Event.js              # Event booking model
│   │   ├── userorder.js          # Order model
│   │   ├── contact.js            # Contact form model
│   │   └── vendor-store.js       # Vendor store model
│   ├── Router/
│   │   ├── userRoute.js          # /register, /login
│   │   ├── event.js              # /api/events
│   │   ├── pay.js                # /pay/payment
│   │   ├── orderroute.js         # /order
│   │   └── contactroute.js       # /user/contact
│   ├── db.js                     # MongoDB connection
│   ├── utils.js                  # Vendor service constants
│   ├── index.js                  # App entry point
│   ├── Dockerfile                # Backend Docker config
│   └── .env                      # Environment variables (not committed)
│
├── event_management/             # React Frontend
│   ├── public/
│   │   ├── image/                # Hero & page images
│   │   ├── photogalleyimg/       # 250+ gallery photos
│   │   └── services/             # Service category images
│   ├── src/
│   │   ├── Service/
│   │   │   ├── Api.js            # Centralized API functions
│   │   │   ├── Apicall.js        # Axios instance + commonRequest
│   │   │   └── helper.js         # Backend base URL
│   │   ├── component/
│   │   │   ├── Navbar.jsx        # Top navigation
│   │   │   ├── Home.js           # Landing page
│   │   │   ├── Bookevent.js      # Event booking form
│   │   │   ├── Upcoming.js       # All events listing
│   │   │   ├── Login.js          # Login page
│   │   │   ├── Registration.js   # Register page
│   │   │   ├── Contact.jsx       # Contact form
│   │   │   ├── About.js          # About page
│   │   │   ├── Photo.jsx         # Photo gallery
│   │   │   ├── Service/          # Service sub-pages
│   │   │   └── Footer.jsx        # Footer
│   │   └── App.js                # Root component + routing
│   ├── Dockerfile                # Frontend Docker config (Nginx)
│   └── .env                      # Frontend env vars (not committed)
│
├── Jenkinsfile                   # CI/CD pipeline
├── .gitignore
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [MongoDB Atlas](https://www.mongodb.com/atlas) account (or local MongoDB)
- [Razorpay](https://razorpay.com/) account (test keys work fine)
- A Gmail account with an [App Password](https://support.google.com/accounts/answer/185833)

### 1. Clone the Repository

```bash
git clone https://github.com/digitalVishalkumarsingh/Event-management.git
cd Event-management
```

### 2. Setup Backend

```bash
cd Backend
```

Create a `.env` file (see [Environment Variables](#-environment-variables) below), then:

```bash
npm install
npm start          # Production
# or
npm run dev        # Development (requires nodemon)
```

Backend runs on **http://localhost:5000**

### 3. Setup Frontend

```bash
cd event_management
```

Create a `.env` file:

```env
REACT_APP_API_URL=http://localhost:5000
```

Then:

```bash
npm install
npm start
```

Frontend runs on **http://localhost:3000**

---

## 🔑 Environment Variables

### `Backend/.env`

```env
# MongoDB
MONGODB_URI=mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/event-management

# JWT
JWT_SECRET=your_strong_jwt_secret_here

# Gmail (Nodemailer) — use an App Password, not your account password
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password

# Razorpay
RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxx
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

# Server
PORT=5000
CLIENT_URL=http://localhost:3000
```

### `event_management/.env`

```env
REACT_APP_API_URL=http://localhost:5000
```

> ⚠️ **Never commit `.env` files.** They are listed in `.gitignore`.

---

## 📡 API Endpoints

### Auth
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `POST` | `/register` | Register new user | ❌ |
| `POST` | `/login` | Login user, returns JWT | ❌ |

### Events
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `POST` | `/api/events` | Book a new event | ❌ |
| `GET` | `/api/events` | Get all events | ❌ |

### Payments
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `POST` | `/pay/payment` | Create Razorpay order | ❌ |

### Orders
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `POST` | `/order` | Create a new order | ❌ |

### Contact
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `POST` | `/user/contact` | Submit contact form + send email | ❌ |
| `GET` | `/user/getcontact` | Get all contact submissions | ❌ |

### Request/Response Examples

<details>
<summary><strong>POST /register</strong></summary>

**Request:**
```json
{
  "name": "Vishal Singh",
  "email": "vishal@example.com",
  "phone": "9876543210",
  "password": "Secret@123"
}
```
**Response:**
```json
{
  "success": true,
  "message": "User registered successfully"
}
```
</details>

<details>
<summary><strong>POST /login</strong></summary>

**Request:**
```json
{
  "email": "vishal@example.com",
  "password": "Secret@123"
}
```
**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": { "id": "...", "name": "Vishal Singh", "email": "vishal@example.com", "role": "user" }
}
```
</details>

<details>
<summary><strong>POST /api/events</strong></summary>

**Request:**
```json
{
  "name": "Vishal Singh",
  "email": "vishal@example.com",
  "address": "123 Main St",
  "contact": "9876543210",
  "eventName": "Wedding",
  "eventDate": "2026-12-15",
  "eventAddress": "Hotel Grand, Delhi",
  "guests": 200,
  "services": ["Catering", "Photography"],
  "tokenAmount": 5000
}
```
**Response:**
```json
{ "success": true, "data": { ... } }
```
</details>

<details>
<summary><strong>POST /pay/payment</strong></summary>

**Request:**
```json
{ "tokenAmount": 5000, "currency": "INR" }
```
**Response:**
```json
{ "success": true, "order": { "id": "order_xxx", "amount": 500000, ... } }
```
</details>

---

## 🐳 Docker Deployment

Both services have production-ready Dockerfiles.

### Run with Docker individually

**Backend:**
```bash
cd Backend
docker build -t eventkiya-backend .
docker run -p 5000:5000 --env-file .env eventkiya-backend
```

**Frontend:**
```bash
cd event_management
docker build -t eventkiya-frontend .
docker run -p 80:80 eventkiya-frontend
```

### Docker Compose (Recommended)

Create a `docker-compose.yml` at the root:

```yaml
version: '3.8'
services:
  backend:
    build: ./Backend
    ports:
      - "5000:5000"
    env_file:
      - ./Backend/.env
    restart: unless-stopped

  frontend:
    build: ./event_management
    ports:
      - "80:80"
    depends_on:
      - backend
    restart: unless-stopped
```

```bash
docker-compose up --build
```

---

## 🗺️ App Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Landing page with hero section |
| `/bookevent` | BookEvent | Event booking form with payment |
| `/getevent` | Upcoming | All upcoming events listing |
| `/login` | Login | User login |
| `/registration` | Registration | User registration |
| `/contact` | Contact | Contact form |
| `/about` | About | About the platform |
| `/service` | Service | All services overview |
| `/photo` | Photo | Photo gallery |
| `/vedio` | Video | Video gallery |
| `/wedding` | Wedding | Wedding events page |
| `/birthday` | Birthday | Birthday events page |
| `/idea` | Ideating | Event ideation page |
| `/artist` | Artist | Artist booking page |
| `/activation` | Activating | Corporate activation page |

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. **Fork** the repository
2. **Create** your feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'feat: add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

Please follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

Made with ❤️ by [Vishal Kumar Singh](https://github.com/digitalVishalkumarsingh)

⭐ **Star this repo** if you found it helpful!

</div>

