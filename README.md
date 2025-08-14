# OneRoomConnect

OneRoomConnect is a **real-time video chat web application** built with:
- **React.js** (Frontend)
- **Node.js + Express** (Backend)
- **Socket.IO** for real-time signaling
- **WebRTC** for peer-to-peer video/audio streaming
- **Bootstrap** for UI styling

The app allows two users to join a "room" and start a live video/audio conversation directly in their browsers.

---

## 🚀 Features
- Join a room using your Gmail and a room code
- Real-time peer-to-peer video and audio calls
- Works across devices (desktop and mobile-friendly UI)
- Socket.IO powered signaling for WebRTC
- Simple responsive UI with Bootstrap

---

## 🛠️ Tech Stack
**Frontend:**
- React.js
- Bootstrap
- Socket.IO Client
- WebRTC APIs

**Backend:**
- Node.js
- Express
- Socket.IO

---

# OneRoomConnect

OneRoomConnect is a **real-time video chat web application** built with:
- **React.js** (Frontend)
- **Node.js + Express** (Backend)
- **Socket.IO** for real-time signaling
- **WebRTC** for peer-to-peer video/audio streaming
- **Bootstrap** for UI styling

The app allows two users to join a "room" and start a live video/audio conversation directly in their browsers.

---

## 🚀 Features
- Join a room using your Gmail and a room code
- Real-time peer-to-peer video and audio calls
- Works across devices (desktop and mobile-friendly UI)
- Socket.IO powered signaling for WebRTC
- Simple responsive UI with Bootstrap

---

## 🛠️ Tech Stack
**Frontend:**
- React.js
- Bootstrap
- Socket.IO Client
- WebRTC APIs

**Backend:**
- Node.js
- Express
- Socket.IO

---

## 📥 Installation & Setup (Local Development)

### 1. Clone the repository
git clone https://github.com/I-am-Rishabh/oneRoomConnect.git
cd oneRoomConnect

### 2. Backend Setup
cd server
npm install

Create a `.env` file in the `server/` directory and configure environment vars as needed (e.g., server port).

Start the backend:
node index.js

By default, this will run on: http://localhost:8000

### 3. Frontend Setup
In a **new terminal**, run:
cd client
npm install

Create a `.env` file in the `client/` directory: REACT_APP_API_URL=http://localhost:8000


Start the frontend development server:npm start
The frontend will be available at: http://localhost:3000
---

## ▶️ How to Run the Project Locally
1. **Start Backend first**
cd server
node index.js
2. **Start Frontend next**
cd client
npm start

3. Open `http://localhost:3000` in the browser.

4. Open the same URL in a different browser/device/tab, join the **same room code**, and you'll see the video call in action.

---

## 📚 How it Works (High-Level)
1. **Joining a Room**
- A user enters their Gmail and a room code.
- A `room:join` event is sent to the backend via Socket.IO.
- The server keeps track of connected clients in that room.

2. **Establishing a Call**
- When the 2nd user joins, the backend notifies the first user.
- WebRTC peer connection is established via offer/answer exchange using Socket.IO for signaling.

3. **Streaming Video/Audio**
- Once both peers accept the call, WebRTC streams video and audio directly **peer-to-peer** (low latency).
- Socket.IO is only used for signaling and negotiation — media data doesn’t go through the backend.

4. **Responsive UI**
- The app adjusts its layout for desktop/laptop (side-by-side videos) and for mobile screens (stacked videos).

---

## 🌐 Deployment
This project is deployed on **Render**:
- **Backend API:** Node.js Web Service
- **Frontend:** Render Static Site (React production build)
- `.env` variables are set in Render dashboard for production.

---

## 📄 License
This project is open-source for learning purposes. You can modify and use it as needed.

---

## 👨‍💻 Author
**Rishabh**  
OneRoomConnect - Real-time video chat over WebRTC + Socket.IO
