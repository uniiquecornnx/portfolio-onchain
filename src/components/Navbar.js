import styled from 'styled-components';
import { useState, useEffect } from 'react';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  z-index: 1000;
  transition: background-color 0.3s ease;
  background-color: ${props => props.scrolled ? 'rgba(255, 255, 255, 1)' : 'transparent'};
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled.button`
  background: none;
  border: none;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: ${props => props.scrolled ? '#222' : '#222'};
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: color 0.2s ease;

  &:hover {
    color: #b06c6c;
  }
`;

const Logo = styled.div`
  font-family: 'Caudex', serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.scrolled ? '#222' : '#222'};
`;

function Navbar({ onWorkClick, onPowClick, onCvClick }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const workSection = document.querySelector('[data-section="work"]');
      if (workSection) {
        const workSectionTop = workSection.offsetTop;
        const scrollPosition = window.scrollY;
        
        // Start transition when we're 100px before the work section
        if (scrollPosition > workSectionTop - 100) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav scrolled={scrolled}>
      <Logo scrolled={scrolled}>*A</Logo>
      <NavLinks>
        <NavLink onClick={onWorkClick} scrolled={scrolled}>Work</NavLink>
        <NavLink onClick={onPowClick} scrolled={scrolled}>POW</NavLink>
        <NavLink scrolled={scrolled}>CV</NavLink>
        <NavLink scrolled={scrolled}>Contact</NavLink>
      </NavLinks>
    </Nav>
  );
}

export default Navbar; 