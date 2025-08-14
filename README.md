# OneRoomConnect

OneRoomConnect is a **real-time video chat web application** built with **React.js**, **Node.js**, **Socket.IO**, and **WebRTC**. The app allows two users to join a "room" and start a live video/audio conversation directly in their browsers with peer-to-peer streaming for optimal performance.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue)](https://oneroomconnect.onrender.com/)  
*⭐ For best experience, please open in Chrome browser*

[![React](https://img.shields.io/badge/React-18+-61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-16+-green)](https://nodejs.org/)
[![Socket.IO](https://img.shields.io/badge/Socket.IO-4.0+-orange)](https://socket.io/)
[![WebRTC](https://img.shields.io/badge/WebRTC-Enabled-red)](https://webrtc.org/)

---

## 🚀 Features

- **Gmail-based Room Access**: Join a room using your Gmail and a unique room code
- **Real-time Peer-to-Peer Video Calls**: Direct WebRTC connection for high-quality video/audio
- **Cross-Device Compatibility**: Works seamlessly on desktop and mobile devices
- **Responsive UI Design**: Bootstrap-powered interface that adapts to all screen sizes
- **Socket.IO Powered Signaling**: Reliable real-time communication for WebRTC negotiation
- **Low Latency Streaming**: Direct peer-to-peer connection bypasses server for media data
- **Simple Room Management**: Easy-to-use room codes for instant connection
- **Camera/Microphone Controls**: Toggle video and audio during calls
- **Connection Status Indicators**: Real-time feedback on connection status

---

## 🛠️ Tech Stack

**Frontend:**
- **React.js** - Modern UI library for component-based architecture
- **Bootstrap** - Responsive CSS framework for mobile-first design
- **Socket.IO Client** - Real-time bidirectional event-based communication
- **WebRTC APIs** - Browser-native peer-to-peer media streaming

**Backend:**
- **Node.js** - JavaScript runtime for server-side development
- **Express.js** - Fast, unopinionated web framework
- **Socket.IO** - Real-time signaling server for WebRTC negotiation

**Deployment:**
- **Render.com** - Cloud platform for both frontend and backend hosting

---

## 🌐 Live Demo

Experience OneRoomConnect live: **[https://oneroomconnect.onrender.com/](https://oneroomconnect.onrender.com/)**

### How to Test:
1. Open the demo link in two different browser tabs/windows
2. Enter the same room code in both tabs
3. Allow camera/microphone permissions when prompted
4. Start your video call!

---

## 📥 Installation & Setup (Local Development)

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager
- Modern web browser with WebRTC support
- Camera and microphone (for video calls)

### 1. Clone the Repository
```bash
git clone https://github.com/I-am-Rishabh/oneRoomConnect.git
cd oneRoomConnect
```

### 2. Backend Setup
```bash
cd server
npm install
```

Create a `.env` file in the `server/` directory:
```env
PORT=8000
NODE_ENV=development
```

Start the backend server:
```bash
node index.js
```
Backend will run on: **http://localhost:8000**

### 3. Frontend Setup
In a **new terminal window**:
```bash
cd client
npm install
```

Create a `.env` file in the `client/` directory:
```env
REACT_APP_API_URL=http://localhost:8000
```

Start the frontend development server:
```bash
npm start
```
Frontend will be available at: **http://localhost:3000**

---

## ▶️ How to Run the Project Locally

### Quick Start Commands:

**Terminal 1 - Backend:**
```bash
cd server
node index.js
```

**Terminal 2 - Frontend:**
```bash
cd client
npm start
```

### Testing Locally:
1. Open `http://localhost:3000` in your browser
2. Open the same URL in a different browser/incognito tab
3. Enter the same room code in both windows
4. Allow camera/microphone permissions
5. Enjoy your video call!

---

## 📚 How It Works (Architecture Overview)

### 1. **Room Joining Process**
- User enters Gmail and unique room code
- `room:join` event sent to backend via Socket.IO
- Server tracks connected clients per room
- Maximum of 2 users per room for optimal performance

### 2. **WebRTC Connection Establishment**
- When second user joins, server notifies first user
- WebRTC peer connection initiated with offer/answer exchange
- Socket.IO handles signaling and ICE candidate exchange
- STUN servers used for NAT traversal

### 3. **Media Streaming**
- Direct **peer-to-peer** WebRTC connection established
- Audio/video data streams directly between browsers
- **No media data passes through server** - ensuring low latency
- Socket.IO only used for initial signaling

### 4. **Responsive Design**
- **Desktop/Laptop**: Side-by-side video layout
- **Mobile/Tablet**: Stacked video layout
- **Adaptive UI**: Automatically adjusts to screen size
- **Touch-Friendly**: Optimized controls for mobile devices

---

## 🔧 API Reference

### Socket.IO Events

#### Client → Server
```javascript
// Join a room
socket.emit('room:join', { email, room });

// WebRTC Signaling
socket.emit('user:call', { to, offer });
socket.emit('call:accepted', { to, ans });
socket.emit('peer:nego:needed', { to, offer });
```

#### Server → Client  
```javascript
// Room management
socket.on('room:join', (data) => { /* User joined */ });
socket.on('user:joined', (data) => { /* Another user joined */ });

// Call handling
socket.on('incomming:call', (data) => { /* Incoming call */ });
socket.on('call:accepted', (data) => { /* Call accepted */ });
socket.on('peer:nego:needed', (data) => { /* Renegotiation needed */ });
```

---

## 🏗️ Project Structure

```
oneRoomConnect/
├── client/                 # React frontend
│   ├── src/
│   │   ├── screens/     # React components
│   │   ├── context/        # Socket context
│   │   ├── service/          # Page components
│   │   └── App.js          # Main App component
│   ├── public/             # Static assets
│   └── package.json        # Frontend dependencies
├── server/                 # Node.js backend
│   ├── index.js           # Main server file
│   └── package.json       # Backend dependencies
└── README.md              # Documentation
```

---

## 🌐 Deployment

### Production Deployment on Render

**Backend (Node.js Web Service):**
- Build Command: `npm install`
- Start Command: `node index.js`
- Environment Variables: Set in Render dashboard

**Frontend (Static Site):**
- Build Command: `npm install && npm run build`
- Publish Directory: `build`
- Environment Variables: `REACT_APP_API_URL=https://your-backend-url`

### Environment Variables

**Backend (.env):**
```env
PORT=8000
NODE_ENV=production
```

**Frontend (.env):**
```env
REACT_APP_API_URL=https://your-backend-url.onrender.com
```

---

## 🔒 Security & Privacy

- **No Data Storage**: No video/audio data is stored on servers
- **Peer-to-Peer**: Media streams directly between users
- **Room-Based Access**: Unique room codes for privacy
- **HTTPS Required**: Secure connection required for WebRTC
- **Browser Permissions**: User controls camera/microphone access

---

## 📱 Browser Compatibility

- ✅ **Chrome 70+** (Recommended)
- ✅ **Firefox 65+**
- ✅ **Safari 12+**
- ✅ **Edge 79+**
- ✅ **Mobile Chrome** (Android)
- ✅ **Mobile Safari** (iOS)

**Note**: WebRTC requires HTTPS in production and camera/microphone permissions.

---

## 🐛 Troubleshooting

### Common Issues:

**Camera/Microphone not working:**
- Ensure HTTPS connection (required for WebRTC)
- Check browser permissions for camera/microphone
- Try refreshing and re-granting permissions

**Connection fails:**
- Check if both users are in the same room
- Verify backend server is running
- Check browser console for WebRTC errors
- Ensure firewall isn't blocking WebRTC

**Audio/Video quality issues:**
- Check internet connection speed
- Close other bandwidth-intensive applications
- Try using Chrome for better WebRTC support

---

## 🚀 Future Enhancements

- [ ] **Multi-user rooms** (more than 2 participants)
- [ ] **Screen sharing** functionality
- [ ] **Chat messaging** during video calls
- [ ] **Recording capabilities** 
- [ ] **Virtual backgrounds**
- [ ] **Room persistence** and history
- [ ] **Mobile app** development
- [ ] **Admin controls** and moderation

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature-name`
3. **Commit changes**: `git commit -m 'Add some feature'`
4. **Push to branch**: `git push origin feature-name`
5. **Submit a pull request**

### Development Guidelines:
- Follow React best practices
- Test WebRTC functionality across browsers
- Ensure mobile responsiveness
- Document new features

---

## 📄 License

This project is **open-source** for learning purposes. You can modify and use it as needed under the MIT License.

---

## 👨‍💻 Author

**Rishabh**  
*Full-Stack Developer specializing in real-time applications*

OneRoomConnect - Real-time video chat over WebRTC + Socket.IO

[![GitHub](https://img.shields.io/badge/GitHub-Repository-black)](https://github.com/I-am-Rishabh/oneRoomConnect)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-blue)](https://github.com/I-am-Rishabh)

---

**Built with ❤️ for seamless video communication**
