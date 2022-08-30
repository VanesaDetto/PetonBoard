import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="home-img">
        <img
          src="https://wakyma.com/blog/wp-content/uploads/2016/12/viajar-con-mascotas-sin-estres.jpg"
          alt="logo"
        />
      </div>
      <div className="home-link">
        <h1>All aboard!</h1>
        <h2>Join us</h2>
        <p>
          We are the most friendly company to travel with your pets. We organize
          flights trips and all the services that are needed for your lovely
          pet. Register wiht us and send your information about your trip and we
          wil contact you.
        </p>
      </div>
    </section>
  );
};

export default Home;
