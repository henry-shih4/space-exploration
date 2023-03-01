import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
