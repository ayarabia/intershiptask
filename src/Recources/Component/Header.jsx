import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBars } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import "../Style/Header.css";
import { useLocation } from 'react-router-dom';



function Header() {
  const location = useLocation();
// console.log(location.pathname);
  let [menu, setMenu] = useState({ display: "none" });
 
  let showNavigationMenu = () => {
    if (menu.display == "none") {
      setMenu({ display: "block" });
    } else {
      setMenu({ display: "none" });
    }
  };
 
  return (
    <>
      <div className="header">
        <div>
          <FontAwesomeIcon
            icon={faBars}
            color="#fff"
            onClick={() => {
              showNavigationMenu();
            }}
          />
        </div>
        <Container>
          <FontAwesomeIcon icon={faHome} color="#fff" />
          {/* <span className="rout">Home&gt;{location.pathname.substring(1)}</span> */}
          <span className="rout">Home{location.pathname.replace('/','>')}</span>
        </Container>
        <div className="menu" style={menu}>
          <div>
            <Link
              to="/Product"
              onClick={() => {
                setMenu({ display: "none" });
            
              }}
            >
              <img src={require("../Images/Scrip1.png")} alt="" />
              <p>Product</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
