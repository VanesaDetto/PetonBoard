import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { JwtContextProvider } from "./contexts/jwtContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pets from "./pages/Pets";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Petregister from "./pages/Petregister";
import Editpet from "./pages/Editpet";
import RequireAuth from "./components/RequiredAuth";

function App() {
  return (
    <JwtContextProvider>
      <div>
        <Router>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pets" element={<Pets />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/petregister" element={<Petregister />} />
            <Route path="/editpet" element={<Editpet />} />
          </Routes>

          <Footer />
        </Router>
      </div>
    </JwtContextProvider>
  );
}

export default App;
