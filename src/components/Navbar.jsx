import styled from 'styled-components';

const NavBarWrapper = styled.div`
  width: 100vw;
  position: sticky;
  top: 0;
  z-index: 100;
  background: #faf9f6;
  border-bottom: 2px solid #e5e5e5;
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
  font-weight: 400;
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
    color:rgb(138, 187, 187);
  }
`;

const Navbar = () => (
  <NavBarWrapper>
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

export default Navbar; 