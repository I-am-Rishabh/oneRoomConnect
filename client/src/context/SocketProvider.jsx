import React, { createContext, useMemo, useContext } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null);

export const useSocket = () => {
   // Use backend URL from environment variable
  const socket = useMemo(() => {
    return io(process.env.REACT_APP_API_URL, {
      transports: ["websocket"], // optional: enforce websocket for better Render performance
    });
  }, []);
  
  return (
    <SocketContext.Provider value={socket}>
      {props.children}
    </SocketContext.Provider>
  );
};
