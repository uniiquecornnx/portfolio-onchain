import styled from 'styled-components';
import React, { useEffect, useState } from 'react';

const NavBarWrapper = styled.div`
  width: 100vw;
  position: fixed;
  top: -0.7rem;
  left: 0rem;
  z-index: 100;
  border-bottom: 2px solid #e5e5e5;
  transition: background 1s, backdrop-filter 1s;
  background: ${({ bgOpacity }) => `rgba(255,255,255,${bgOpacity})`};
  backdrop-filter: ${({ bgOpacity }) => bgOpacity > 0.1 ? 'blur(6px)' : 'none'};
  box-shadow: none;
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem 1.5rem 1rem 1.5rem;
  font-family: 'Caudex', serif;
  font-size: 2rem;
  background: transparent;
  box-sizing: border-box;
  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0.7rem 1rem 0.3rem 1rem;
  }
`;

const Logo = styled.div`
  font-weight: 100;
  font-size: 2.2rem;
  letter-spacing: 0.1em;
  margin-right: 2rem;
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 0;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 16px;
    background: #ffffff;
    border-radius: 0.5rem;
    box-shadow: 0 4px 24px rgba(0,0,0,0.07);
    padding: 1rem 2rem;
    z-index: 200;
    gap: 1rem;
    min-width: 120px;
    animation: fadeIn 0.2s;
    backdrop-filter: none;
  }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const Hamburger = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 201;
    margin-left: auto;
  }
`;

const Bar = styled.div`
  width: 24px;
  height: 3px;
  background: #222;
  margin: 3px 0;
  border-radius: 2px;
`;

const Link = styled.a`
  color: #222;
  text-decoration: none;
  position: relative;
  transition: color 0.2s;
  &:hover {
    color:rgb(205, 170, 192);
  }
`;

const Navbar = () => {
  const [bgOpacity, setBgOpacity] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 0px = transparent, 120px+ = fully white
      const scrollY = window.scrollY;
      const opacity = Math.min(scrollY / 120, 1);
      setBgOpacity(opacity);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <NavBarWrapper bgOpacity={bgOpacity}>
      <Nav>
        <Logo>*A</Logo>
        <NavLinks>
          <Link href="#home">Work</Link>
          <Link href="#pow">PoW</Link>
          <Link href="#profile">CV</Link>
          <Link href="#contact">Contact</Link>
        </NavLinks>
        <Hamburger onClick={() => setMenuOpen(m => !m)} aria-label="Open menu">
          <Bar />
          <Bar />
          <Bar />
        </Hamburger>
        {menuOpen && (
          <MobileMenu>
            <Link href="#home" onClick={() => setMenuOpen(false)}>Work</Link>
            <Link href="#pow" onClick={() => setMenuOpen(false)}>PoW</Link>
            <Link href="#profile" onClick={() => setMenuOpen(false)}>CV</Link>
            <Link href="#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </MobileMenu>
        )}
      </Nav>
    </NavBarWrapper>
  );
};

export default Navbar; 