import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { JwtContext } from "../contexts/jwtContext";

const Header = () => {
  const { user, logout } = useContext(JwtContext);

  return (
    <header>
      <nav>
        <h2>Pet on Board</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pets">Traveller Pets</Link>
          </li>
        </ul>
      </nav>
      <div className="control">
        {user ? (
          <>
            <p>Welcome {user.username}</p>
            {pet.avatar !== "undefined" ? (
              <img src={user?.avatar} alt="User Avatar" />
            ) : null}

            <button onClick={() => logout() & navigate("/login")}>
              Logout
            </button>
          </>
        ) : (
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/Petregister">Register</Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
