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
  background-color: ${props => `rgba(255, 255, 255, ${props.scrollProgress})`};
  backdrop-filter: ${props => props.scrollProgress > 0 ? 'blur(8px)' : 'none'};
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
`;

const HamburgerLine = styled.span`
  display: block;
  width: 25px;
  height: 2px;
  background-color: #222;
  transition: all 0.3s ease;
`;

const MobileMenu = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 250px;
  background-color: white;
  padding: 6rem 2rem 2rem 2rem;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  transform: translateX(${props => props.isOpen ? '0' : '100%'});
  transition: transform 0.3s ease;
  z-index: 1000;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const MobileNavLink = styled.button`
  background: none;
  border: none;
  font-family: 'Inter', sans-serif;
  font-size: 1.2rem;
  color: #222;
  cursor: pointer;
  padding: 0.5rem 0;
  text-align: left;
  transition: color 0.2s ease;

  &:hover {
    color: #b06c6c;
  }
`;

const MobileNavLinkAnchor = styled.a`
  background: none;
  border: none;
  font-family: 'Inter', sans-serif;
  font-size: 1.2rem;
  color: #222;
  cursor: pointer;
  padding: 0.5rem 0;
  text-align: left;
  transition: color 0.2s ease;
  text-decoration: none;
  display: block;

  &:hover {
    color: #b06c6c;
  }
`;

const NavLink = styled.button`
  background: none;
  border: none;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: ${props => props.scrollProgress > 0.5 ? '#222' : '#222'};
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: color 0.2s ease;

  &:hover {
    color: #b06c6c;
  }
`;

const NavLinkAnchor = styled.a`
  background: none;
  border: none;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: ${props => props.scrollProgress > 0.5 ? '#222' : '#222'};
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: color 0.2s ease;
  text-decoration: none;

  &:hover {
    color: #b06c6c;
  }
`;

const Logo = styled.div`
  font-family: 'Caudex', serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.scrollProgress > 0.5 ? '#222' : '#222'};
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

function Navbar({ onWorkClick, onPowClick, onCvClick }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = 300;
      const progress = Math.min(scrollPosition / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileNavClick = (callback) => {
    setIsMobileMenuOpen(false);
    callback();
  };

  return (
    <Nav scrollProgress={scrollProgress}>
      <Logo scrollProgress={scrollProgress} onClick={scrollToTop}>*A</Logo>
      <NavLinks>
        <NavLink onClick={onWorkClick} scrollProgress={scrollProgress}>Work</NavLink>
        <NavLink onClick={onPowClick} scrollProgress={scrollProgress}>POW</NavLink>
        <NavLinkAnchor 
          href="https://drive.google.com/file/d/1rd1lledHIra7GMxAz60FoK1-pCMlSEu2/view?usp=drivesdk" 
          target="_blank" 
          rel="noopener noreferrer"
          scrollProgress={scrollProgress}
        >
          CV
        </NavLinkAnchor>
        <NavLink 
          onClick={onCvClick} 
          scrollProgress={scrollProgress}
        >
          Contact
        </NavLink>
      </NavLinks>
      <MobileMenuButton onClick={handleMobileMenuClick}>
        <HamburgerLine />
        <HamburgerLine />
        <HamburgerLine />
      </MobileMenuButton>
      <MobileMenu isOpen={isMobileMenuOpen}>
        <MobileNavLink onClick={() => handleMobileNavClick(onWorkClick)}>Work</MobileNavLink>
        <MobileNavLink onClick={() => handleMobileNavClick(onPowClick)}>POW</MobileNavLink>
        <MobileNavLinkAnchor 
          href="https://drive.google.com/file/d/1N77d8a20FcBJpMT9XwuWXso5aoHLRikx/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          CV
        </MobileNavLinkAnchor>
        <MobileNavLink onClick={() => handleMobileNavClick(onCvClick)}>Contact</MobileNavLink>
      </MobileMenu>
    </Nav>
  );
}

export default Navbar; 