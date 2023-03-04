
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home';
import Profile from "./components/profile";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>


          </Route>
          <Route path="/home" element={<Home />}>


          </Route><Route path="/profile" index element={<Profile />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
