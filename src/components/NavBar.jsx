import { useEffect, useState } from "react";

import { navLinks } from "../constants";

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <p
          className={`text-4xl font-bold bg-clip-text text-transparent transition-all duration-500 bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 `}
        >
          Nazim Uddin
        </p>

        {/* Glow Shapes */}
        <div className="absolute -bottom-24 -left-24 w-75 h-75 bg-linear-to-tr from-blue-500 via-purple-500 to-pink-500 rounded-full blur-[120px]"></div>
        <div className="absolute -top-24 -right-24 w-75 h-75 bg-linear-to-tr from-purple-400 via-blue-500 to-purple-600 rounded-full blur-[120px]"></div>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default NavBar;
