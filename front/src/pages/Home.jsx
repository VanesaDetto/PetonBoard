import { Link } from "react-router-dom"
import "./Home.css";


const Home = () => {
    return (<section className="home">
        <h1>All aboard!</h1>
        <img src="https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/03/931/523/iStock-1065666556.jpg?ve=1&tl=1" alt="logo" />
        <p>Join us</p>
        <Link to="/petregister">Register your pet!</Link>
        <Link to="/login">Enter in your account</Link>
    </section>)
}

export default Home