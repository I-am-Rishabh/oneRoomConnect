import { Routes, Route } from "react-router-dom";
import "./App.css";
import LobbyScreen from "./screens/Lobby";
import RoomPage from "./screens/Room";

// ✅ Correct named import from your context file
import { SocketProvider } from "./context/SocketProvider";

function App() {
  return (
    <div className="App">
      {/* Wrap the whole app with SocketProvider so socket context is available */}
      <SocketProvider>
        <Routes>
          <Route path="/" element={<LobbyScreen />} />
          <Route path="/room/:roomId" element={<RoomPage />} />
        </Routes>
      </SocketProvider>
    </div>
  );
}

export default App;
