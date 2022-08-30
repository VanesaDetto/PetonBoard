import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { JwtContext } from "../contexts/jwtContext";

const Header = () => {
  const { user, logout } = useContext(JwtContext);
  let navigate = useNavigate();

  return (
    <header>
      <nav>
        <div className="logo">
          <img
            src="https://storage.googleapis.com/static.simplefact.pe/0b0b7c8f2de94a5fb17392e103f5ab61/logos/JkU9teYobYWISWGJz9xjkXvqTeu0R09wy6KLdBNb.png"
            alt="logo"
          />
        </div>
        <ul className="nav">
          <li className="li-home">
            <Link to="/">Home</Link>
          </li>
          <li className="li-home">
            <Link to="/pets">Traveller Pets</Link>
          </li>
          {user ? (
            <>
              <li>
                <Link to="/Profile">Profile</Link>
              </li>
            </>
          ) : null}
        </ul>
        <div className="control">
          {user ? (
            <>
              <p>Wellcome</p>
              {user.avatar !== undefined ? (
                <img src={user?.avatar} alt="Petuser Avatar" />
              ) : null}

              <button onClick={() => logout() & navigate("/")}>Logout</button>
            </>
          ) : (
            <ul className="control-ul">
              <li className="control-li">
                <Link to="/login">Login</Link>
              </li>

              <li className="control-li">
                <Link to="/Petregister">Register</Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
