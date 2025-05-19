import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import './App.css';
import styled from 'styled-components';

const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 40vh;
  margin-top: 5rem;
`;

const ContactText = styled.p`
  font-size: 1.5rem;
  font-family: 'Cormorant Garamond', serif;
  margin-bottom: 2rem;
  color: #222;
`;

const ContactButton = styled.a`
  padding: 0.8rem 2.2rem;
  background: #222;
  color: #fff;
  border-radius: 2rem;
  font-size: 1.1rem;
  font-family: 'Inter', sans-serif;
  text-decoration: none;
  font-weight: 400;
  letter-spacing: 0.05em;
  transition: background 0.2s, color 0.2s, border 0.2s;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  border: 2px solid transparent;
  &:hover {
    background: #fff;
    color: #222;
    border: 2px solid #222;
    font-weight: 400;
  }
`;

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Categories />
      <ContactSection>
        <ContactText>Let's work together or just say hello! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum, mauris in sodales tincidunt, sapien lorem suscipit erat, ac malesuada magna odio a magna. Integer id arcu id dolor facilisis suscipit. Quisque ut felis ut mi feugiat faucibus non sed turpis.</ContactText>
        <ContactButton href="#contact">Contact</ContactButton>
      </ContactSection>
    </div>
  );
}

export default App;
