import React, { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";

function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="logo" className="logo" />
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li>
          <button className="btn">Contact us</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
