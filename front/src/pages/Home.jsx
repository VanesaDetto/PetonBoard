import { Link } from "react-router-dom"
import "./Home.css";


const Home = () => {
    return (<section className="home">
        <h1>All aboard!</h1>
        <img src="#" alt="logo" />
        <p>Join us</p>
        <Link to="/petregister">Register your pet!</Link>
        <Link to="/login">Enter in your account</Link>
    </section>)
}

export default Home