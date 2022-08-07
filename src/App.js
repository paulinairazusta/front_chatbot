import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Plays from "./components/Plays";
import Play from "./components/Play";

// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Plays />} />
        <Route path="/play/:id" element={<Play />} />
      </Routes>
    </div>
  );
}

export default App;
