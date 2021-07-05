import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          BueStrengGemmer
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Hjem
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/arrows">
                Opret Pil
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/strings">
                Opret Streng
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
