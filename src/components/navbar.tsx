import React from 'react';
import StyledNavbar from '@/styles/components/navbar';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Navbar() {
  const router = useRouter();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element && router.pathname === '/') {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/');
    }
  };
  return (
    <StyledNavbar>
            <div className="container">
              <Link className="navbar-brand" href={'/'}>Erminio</Link>

                <div className="navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a onClick={() => scrollToSection('about')} className="nav-link" href='#About'>About</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={() => scrollToSection('experience')} className="nav-link" href='#Experience'>Experience</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={() => scrollToSection('work')} className="nav-link" href='#Work'>Work</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={() => scrollToSection('contact')} className="nav-link" href='#Contact'>Contact</a>
                    </li>
                </ul>
                </div>
            </div>
    </StyledNavbar>
  );
}
