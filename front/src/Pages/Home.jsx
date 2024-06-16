import React from "react";
import "./Home.scss";
import {Link} from "react-router-dom"

const Home = () => {
    return (
        <div className="home--page">
            <div className="welcome-msg">
                <Link className="link" to={"/crud-operatrions/dashboard"}>Start</Link>
            </div>

        </div>
    )
}

export default Home;