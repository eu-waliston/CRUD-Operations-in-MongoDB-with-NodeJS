import React from "react";
import "./Menu.scss";
import { Link } from "react-router-dom";
import BG from "./png-transparent-masaru-kato-kei-kurono-gantz-g-manga-gantz-text-manga-logo-removebg-preview.png";

import { BsPersonPlusFill } from "react-icons/bs";
import { HiUser } from "react-icons/hi2";
import { BsPersonDashFill } from "react-icons/bs";
import { FaUserPen } from "react-icons/fa6";
const Menu = () => {
  const [nav, setNav] = React.useState(false);

  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div className={nav ? "menu--toggled" : "menu"}>
      <i
        class={`bi ${
          nav ? "bi-arrow-right-circle-fill" : "bi-arrow-left-circle-fill"
        }`}
        onClick={() => handleClick()}
      ></i>
      <img src={BG} alt="background" className="BG" />
      <div className="menu--itens">
        <Link className="item-menu-icon">
          <HiUser className="icon" />
          All Characters
        </Link>
        <Link className="item-menu-icon">
          <FaUserPen className="icon" />
          Edit Character
        </Link>
        <Link className="item-menu-icon">
          <BsPersonPlusFill className="icon" />
          Create Character
        </Link>
        <Link className="item-menu-icon">
          <BsPersonDashFill className="icon" />
          Delete Character
        </Link>
      </div>
    </div>
  );
};

export default Menu;
