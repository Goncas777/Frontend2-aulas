import Hour from "../../components/Hour"
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="main-container">
            <h1>Home</h1>
            <button onClick={() => navigate("/about")}>Go to about</button>
            <Hour />
        </div>
    )
}

export default Home;