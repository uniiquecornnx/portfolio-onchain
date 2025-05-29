import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';
import styled from 'styled-components';

const BgVideoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 710px;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
`;

const BgVideo = styled.video`
  width: 100vw;
  height: 710px;
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
  margin-bottom: 7rem;
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
  box-shadow: 0 2px 12px rgba(255, 255, 255, 0.04);
  border: 2px solid transparent;
  &:hover {
    background: #fff;
    color: #222;
    border: 2px solid #222;
    font-weight: 400;
  }
`;

const WorkHeadline = styled.h2`
  font-family: 'Caudex', serif;
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  margin: 4rem 0 2rem 0;
  color: #222;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.5rem;
  justify-content: center;
  align-items: start;
  max-width: 1000px;
  margin: 5rem auto 4rem auto;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const WorkCard = styled.div`
  display: flex;
  flex-direction: row;
  width: 500px;
  height: 250px;
  background: #fff;
  border-radius: 2rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.07);
  overflow: hidden;
  border: 1.5px solid #ececec;
  @media (max-width: 600px) {
    width: 90vw;
    height: 45vw;
    min-height: 160px;
  }
`;

const CardTopic = styled.div`
  flex: 1;
  background: #f7e6e6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Caudex', serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #b06c6c;
  padding: 1rem;
`;

const CardExp = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  color: #222;
  padding: 1.5rem;
  background: #faf9f6;
`;

const ExpSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
`;

const ExpHeadline = styled.h2`
  font-family: 'Caudex', serif;
  font-size: 1.7rem;
  font-weight: 400;
  text-align: center;
  margin: 2rem 0 1rem 0;
  color: #222;
`;

const ExpHeadlineRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

const ExpHeadlineImg = styled.img`
  width: 36px;
  height: 36px;
  object-fit: cover;
  border-radius: 0.5rem;
`;

const ExpSubtitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
`;

const ExpSubtitleImg = styled.img`
  width: 36px;
  height: 36px;
  object-fit: cover;
  border-radius: 0.5rem;
`;

const ExpSubtitle = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #888;
  text-align: left;
  margin-left: 0;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const ExpDescText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  color: #222;
  text-align: left;
  max-width: 700px;
  margin: 0 0 2.5rem 0;
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
      </MainContent>
      <ContactSection>
        <ContactText>Let's work together or just say hello! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum, mauris in sodales tincidunt, sapien lorem suscipit erat, ac malesuada magna odio a magna. Integer id arcu id dolor facilisis suscipit.</ContactText>
        <ContactButton href="#contact">Contact</ContactButton>
      </ContactSection>
      <WorkHeadline>My Work</WorkHeadline>
      <CardsGrid>
        <WorkCard>
          <CardTopic>Marketing</CardTopic>
          <CardExp>3 years at Creative Studio, led branding projects for startups and NGOs.</CardExp>
        </WorkCard>
        <WorkCard>
          <CardTopic>BD</CardTopic>
          <CardExp>2 years at Digital Agency, managed campaigns for tech and lifestyle brands.</CardExp>
        </WorkCard>
        <WorkCard>
          <CardTopic>Events</CardTopic>
          <CardExp>Product manager for SaaS platform, improved user retention by 30%.</CardExp>
        </WorkCard>
        <WorkCard>
          <CardTopic>Growth</CardTopic>
          <CardExp>Growth strategist for e-commerce, scaled user base from 10k to 100k.</CardExp>
        </WorkCard>
      </CardsGrid>
      <ExpSection>
        <ExpHeadlineRow>
          <ExpHeadline>Supra</ExpHeadline>
          <ExpHeadlineImg src="/your-supra-image.png" alt="Supra logo" />
        </ExpHeadlineRow>
        <div style={{width: '100%', maxWidth: 700, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
          <ExpSubtitleRow>
            
            <ExpSubtitle>Growth Head</ExpSubtitle>
          </ExpSubtitleRow>
          <ExpDescText>
            Here you can highlight your experience at a specific company. Add a short summary of your role, achievements, or anything you want visitors to know about your time there.
          </ExpDescText>
        </div>
      </ExpSection>
    </div>
  );
}

export default App;
