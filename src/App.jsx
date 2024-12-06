import { useEffect, useState } from "react";
import SelectionPanel from "./components/SelectionPanel";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Login from "./components/Login";
import AddServiceForm from "./components/AddServiceForm";
import salonService from "./services/services";

function App() {
  // useState hook, pass these down to child components
  const [services, setServices] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [user, setUser] = useState(null);

  // event handler
  const login = (user) => setUser(user);

  const logout = () => {
    setUser(null);
    setSelectedServices([]);
  };

  // useEffect hook to fetch data from server after App component rendered
  useEffect(() => {
    salonService.getAll().then((salonServices) => setServices(salonServices));
  }, []);

  return (
    <Router>
      <NavBar user={user} onLogout={logout} />
      <div className="flex justify-around">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/services"
            element={
              <SelectionPanel
                services={services}
                selectedServices={selectedServices}
                setSelectedServices={setSelectedServices}
              />
            }
          />
          <Route
            path="/add-service"
            element={<AddServiceForm setServices={setServices} />}
          />
          <Route path="/professional" element={<Home />} />
          <Route path="/login" element={<Login onLogin={login} />} />
        </Routes>
        <Cart selectedServices={selectedServices} user={user} />
      </div>
    </Router>
  );
}

export default App;
