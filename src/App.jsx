import { useState } from "react";
import SelectionPanel from "./components/SelectionPanel";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  // useState hook, pass these down to child components
  const [selectedServices, setSelectedServices] = useState([]);
  const [user, setUser] = useState(null);

  // event handler
  const login = (user) => setUser(user);

  const logout = () => {
    setUser(null);
    setSelectedServices([]);
  };

  return (
    <Router>
      <NavBar user={user} onLogout={logout}/>
      <div className="flex justify-around">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/services"
            element={
              <SelectionPanel
                selectedServices={selectedServices}
                setSelectedServices={setSelectedServices}
              />
            }
          />
          <Route path="/professional" element={<Home />} />
          <Route path="/login" element={<Login onLogin={login}/>} />
        </Routes>
        <Cart selectedServices={selectedServices} user={user}/>
      </div>
    </Router>
  );
}

export default App;
