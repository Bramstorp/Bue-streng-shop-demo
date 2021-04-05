import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">
          BueStrengGemmer
        </a>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="/">
                Hjem
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/arrows">
                Opret Pil
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/strings">
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
