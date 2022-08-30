import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { JwtContextProvider } from "./contexts/jwtContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pets from "./pages/Pets";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Petregister from "./pages/Petregister";
import RequireAuth from "./components/RequiredAuth";
import useLocalStorage from "use-local-storage";
import "./App.css";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage("theme", defaultDark ? "🌚" : "☀️");

  const switchTheme = () => {
    const newTheme = theme === "☀️" ? "🌚" : "☀️";
    setTheme(newTheme);
  };
  return (
    <JwtContextProvider>
      <div className="app" data-theme={theme}>
        <Router>
          <button className="mode" onClick={switchTheme}>
            Mode {theme === "☀️" ? "🌚" : "☀️"}{" "}
          </button>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pets" element={<Pets />} />
            <Route
              path="/profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />

            <Route path="/login" element={<Login />} />
            <Route path="/petregister" element={<Petregister />} />
          </Routes>

          <Footer />
        </Router>
      </div>
    </JwtContextProvider>
  );
}

export default App;
