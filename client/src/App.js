import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import RoomPage from "./screens/Room";
import Lobby from "./screens/Lobby";

function App() {
  return <div className="App">
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/room/:roomId" element={<RoomPage />} />
      </Routes>
  </div>;
}

export default App;
