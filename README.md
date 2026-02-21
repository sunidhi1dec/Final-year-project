💬 AI-Powered Chat Application System

A modern real-time chat application with integrated AI support, designed for collaborative communication and group projects.
This system enables users to chat, create groups, and interact with an AI assistant for smart responses and task assistance.

🚀 Features
👤 User Features

User Registration & Login (Authentication)

Secure JWT-based Authorization

Profile Management

💬 Chat Features

One-to-one private chat

Real-time messaging

Message history storage

Online/Offline user status

👥 Group Chat Features

Create group chats

Add/Remove group members

Group message broadcasting

Role-based permissions (Admin/User)

🤖 AI Support Features

AI-powered response suggestions

Smart auto-replies

Project assistance & query handling

Context-based intelligent replies

🛠️ Tech Stack
Backend

Node.js

Express.js

MongoDB

Mongoose

JWT Authentication

Frontend (if applicable)

React.js / HTML / CSS / JavaScript

AI Integration

OpenAI API / AI Model Integration

REST API based communication

📁 Project Structure
backend/
│
├── controllers/
├── models/
├── routes/
├── middlewares/
├── services/
├── db/
├── app.js
├── server.js
└── package.json
⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/your-username/Final-year-project.git
cd Final-year-project
2️⃣ Install Dependencies
cd backend
npm install
3️⃣ Setup Environment Variables

Create a .env file inside backend/:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
AI_API_KEY=your_ai_api_key
4️⃣ Run Server
npm start

Server will start at:

http://localhost:5000
🔐 Authentication Flow

User logs in

JWT token generated

Token required for protected routes

Middleware verifies token before access

🧠 AI Integration Workflow

User sends message

Backend forwards query to AI API

AI generates response

Response sent back to user

Stored in chat history

🎯 Use Case for Group Projects

Team collaboration

Academic project communication

AI-based task assistance

Real-time discussion platform

Smart productivity tool

📌 Future Enhancements

Video/Voice Chat

File Sharing

Message Encryption

AI Summarization of Group Chats

Notification System

Mobile App Integration

👩‍💻 Developed By

Sunidhi Srivastava
Final Year Project – B.Tech

📜 License

This project is developed for academic and learning purposes.

🔥 How To Add This README

Inside your project folder:

notepad README.md

Paste the above content → Save → Then:

git add README.md
git commit -m "Added project README"
git push


Add frontend description (if you have one)

Tell me which version you want 🚀
