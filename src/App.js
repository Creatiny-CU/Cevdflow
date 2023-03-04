import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Profile from "./components/profile";
import Proposal from "./components/proposal";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/profile" index element={<Profile />} />
          <Route path="/proposal" index element={<Proposal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
