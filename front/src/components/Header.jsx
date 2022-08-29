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
        <img src="https://premierpettravel.com/wp-content/uploads/2019/11/Logo.png" alt="logo"  />
        </div>
    
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pets">Traveller Pets</Link>
          </li>
          {user ? (
            <>
              <li>
                <Link to="/Profile">PROFILE</Link>
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
      </nav>
      
    </header>
  );
};

export default Header;
