import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { JwtContextrovider } from "./contexts/jwtContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pets from "./pages/Pets";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Petregister from "./pages/Petregister";
import Newpet from "./pages/Newpet";
import Editpet from "./pages/Editpet";

function App() {
  return (
    <JwtContextrovider>
      <div>
        <Router>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pets" element={<Pets />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/petregister" element={<Petregister />} />
            <Route path="/newpet" element={<Newpet />} />
            <Route path="/editpet" element={<Editpet />} />
          </Routes>

          <Footer />
        </Router>
      </div>
    </JwtContextrovider>
  );
}

export default App;
