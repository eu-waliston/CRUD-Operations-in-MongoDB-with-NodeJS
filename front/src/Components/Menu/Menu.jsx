import React from "react";
import "./Menu.scss"
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div className="menu">
            <h3><span>GANTZ</span> <br /> Dashboard</h3>
            <div className="menu--itens">
                <Link className="item-menu-icon">All Characters</Link>
                <Link className="item-menu-icon">Add Character</Link>
                <Link className="item-menu-icon">Create Character</Link>
                <Link className="item-menu-icon">Delete Character</Link>
            </div>
        </div>
    )
}

export default Menu;