import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import './App.css';
import styled from 'styled-components';

const BgVideoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 800px;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
`;

const BgVideo = styled.video`
  width: 100vw;
  height: 1000px;
  object-fit: cover;
  min-width: 100%;
  min-height: 100%;
`;

const MainContent = styled.div`
  position: relative;
  
  z-index: 1;
`;

const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 40vh;
  margin-top: 5rem;
`;

const ContactText = styled.p`
  font-size: 2.7rem;
  font-family: 'Cormorant Garamond', serif;
  margin-bottom: 4rem;
  color: #222;
  font-weight: 400;
  text-align: center;
  padding: 2rem 2rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
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
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <BgVideoWrapper>
        <BgVideo autoPlay loop muted playsInline>
          <source src="/pink-wave.mp4" type="video/mp4" />
        </BgVideo>
      </BgVideoWrapper>
      <MainContent>
        <Navbar />
        <Hero />
        <Categories />
      </MainContent>
      <ContactSection>
        <ContactText>Let's work together or just say hello! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum, mauris in sodales tincidunt, sapien lorem suscipit erat, ac malesuada magna odio a magna. Integer id arcu id dolor facilisis suscipit.</ContactText>
        <ContactButton href="#contact">Contact</ContactButton>
      </ContactSection>
    </div>
  );
}

export default App;
