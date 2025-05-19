import styled from 'styled-components';
import React, { useEffect, useState } from 'react';

const NavBarWrapper = styled.div`
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  border-bottom: 2px solid #e5e5e5;
  transition: background 0.3s, backdrop-filter 0.3s;
  background: ${({ bgOpacity }) => `rgba(255,255,255,${bgOpacity})`};
  backdrop-filter: ${({ bgOpacity }) => bgOpacity > 0.1 ? 'blur(6px)' : 'none'};
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem 1.5rem 1rem 1.5rem;
  font-family: 'Cormorant Garamond', serif;
  font-size: 2rem;
  background: transparent;
  box-sizing: border-box;
`;

const Logo = styled.div`
  font-weight: 100;
  font-size: 2.2rem;
  letter-spacing: 0.1em;
  margin-right: 45rem;
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
          <Link href="#home">Home</Link>
          <Link href="#work">Work</Link>
          <Link href="#profile">Profile</Link>
          <Link href="#contact">Contact</Link>
        </NavLinks>
      </Nav>
    </NavBarWrapper>
  );
};

export default Navbar; 