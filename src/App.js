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
`;

const MainContent = styled.div`
  position: relative;
  z-index: 1;
`;

const WorkHeadline = styled.h2`
  font-family: 'Caudex', serif;
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  margin: 8rem 0 3rem 0;
  color: #222;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.5rem;
  justify-content: center;
  align-items: start;
  max-width: 1000px;
  margin: 0 auto 2rem auto;
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
  align-items: flex-start;
  margin-bottom: 3rem;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding: 0 2rem;
`;

const ExpHeadlineRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

const ExpHeadline = styled.h2`
  font-family: 'Caudex', serif;
  font-size: 1.7rem;
  font-weight: 400;
  text-align: left;
  margin: 0;
  color: #222;
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

const ExpSubtitle = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #888;
  text-align: left;
  margin-left: 0;
  margin-bottom: 0.5rem;
  font-weight: 500;
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
      <WorkHeadline>My Work</WorkHeadline>
      <ExpSection>
        <ExpHeadlineRow>
          <ExpHeadline>Supra</ExpHeadline>
          <ExpHeadlineImg src="/supra.png" alt="Supra logo" />
        </ExpHeadlineRow>
        <ExpSubtitleRow>
          <ExpSubtitle>Growth Head</ExpSubtitle>
        </ExpSubtitleRow>
      </ExpSection>
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
    </div>
  );
}

export default App;
