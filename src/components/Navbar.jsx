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
`;

const Logo = styled.div`
  font-weight: 100;
  font-size: 2.2rem;
  letter-spacing: 0.1em;
  margin-right: 63rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
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

  return (
    <NavBarWrapper bgOpacity={bgOpacity}>
      <Nav>
        <Logo>*A</Logo>
        <NavLinks>
          <Link href="#home">Work</Link>
          <Link href="#work">PoW</Link>
          <Link href="#profile">CV</Link>
          <Link href="#contact">Contact</Link>
        </NavLinks>
      </Nav>
    </NavBarWrapper>
  );
};

export default Navbar; 