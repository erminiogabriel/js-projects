import React from 'react';
import { StyledNavbar } from '@/styles/navbar';

export default function Navbar() {
  return (
    <StyledNavbar>
            <div className="container">
                <a className="navbar-brand" href="#">Erminio</a>

                <div className="navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#experience">Experience</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#work">Work</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
                </div>
            </div>
    </StyledNavbar>
  );
}
