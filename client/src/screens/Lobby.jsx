import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../context/SocketProvider";
import "./Lobby.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const LobbyScreen = () => {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const socket = useSocket();
  const navigate = useNavigate();

  const handleSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      socket.emit("room:join", { email, room });
    },
    [email, room, socket]
  );

  const handleJoinRoom = useCallback(
    (data) => {
      const { room } = data;
      navigate(`/room/${room}`);
    },
    [navigate]
  );

  useEffect(() => {
    socket.on("room:join", handleJoinRoom);
    return () => {
      socket.off("room:join", handleJoinRoom);
    };
  }, [socket, handleJoinRoom]);

  return (
  <div className="lobby-outer">
  <div className="lobby-inner">
    {/* Gradient Heading */}
    <h1 className="project-heading-gradient">OneRoomConnect</h1>
    <form onSubmit={handleSubmitForm}>
      <h2 className="login-title">Join a Room</h2>
      <div className="mb-4">
        <label htmlFor="email" className="form-label">
          Gmail
        </label>
        <input
          type="email"
          id="email"
          className="form-control lobby-input-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your Gmail"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="room" className="form-label">
          Room Code
        </label>
        <input
          type="text"
          id="room"
          className="form-control"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
          placeholder="Enter room code"
          required
        />
      </div>
      <button className="btn join-btn w-100" type="submit">
        Join
      </button>
    </form>
  </div>
</div>


  );
};

export default LobbyScreen;
