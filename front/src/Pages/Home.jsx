import React from "react";
import "./Home.scss";
import {Link} from "react-router-dom"

const Home = () => {
    return (
        <div className="home--page">
            <div className="welcome-msg">
                <h1><span>CRUD</span> Operations</h1>
                <h2>With</h2>
                <h1><span>MongoDB</span> and <span>Node.JS</span></h1>
                <Link className="link">Let's Start</Link>
            </div>

        </div>
    )
}

export default Home;