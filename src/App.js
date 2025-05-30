import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

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

const SubHeading = styled.h2`
  font-family: 'Caudex', serif;
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  margin: 6rem 0 3rem 0;
  color: #222;
`;

const ImageCardsContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  margin: 0 auto 6rem auto;
  padding: 2rem 0;
`;

const ImageCardsWrapper = styled(motion.div)`
  display: flex;
  gap: 4rem;
  padding: 0 2rem;
`;

const ImageCard = styled(motion.div)`
  min-width: 600px;
  display: flex;
  gap: 2rem;
  align-items: center;
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.07);
  cursor: pointer;
`;

const CardImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 1rem;
`;

const CardContent = styled.div`
  flex: 1;
`;

const CardTitle = styled.h3`
  font-family: 'Caudex', serif;
  font-size: 1.5rem;
  font-weight: 400;
  color: #222;
  margin: 0 0 1rem 0;
`;

const CardDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #444;
  line-height: 1.6;
  margin: 0;
`;

const VideoCard = styled(motion.div)`
  min-width: 600px;
  display: flex;
  gap: 2rem;
  align-items: center;
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.07);
  cursor: pointer;
`;

const VideoEmbed = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 1rem;
  overflow: hidden;
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const Section = styled.div`
  scroll-margin-top: 80px;
`;

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoHovered, setIsVideoHovered] = useState(false);
  
  const workSectionRef = useRef(null);
  const powSectionRef = useRef(null);
  const cvSectionRef = useRef(null);
  
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      image: "/projects/supra-project.jpg",
      title: "Supra Growth Strategy",
      description: "Led growth initiatives at Supra, implementing innovative marketing strategies that resulted in significant user acquisition and engagement. Focused on community building and strategic partnerships in the web3 space."
    },
    {
      image: "/projects/marketing-campaign.jpg",
      title: "Digital Marketing Campaign",
      description: "Orchestrated comprehensive digital marketing campaigns for tech startups, achieving 150% growth in user engagement and 200% increase in conversion rates through targeted social media and content strategies."
    },
    {
      image: "/projects/community-event.jpg",
      title: "Community Event Series",
      description: "Organized and executed successful community events and workshops, bringing together industry leaders and enthusiasts. Created engaging content and managed social media presence to maximize event impact."
    },
    {
      image: "/projects/business-dev.jpg",
      title: "Business Development",
      description: "Spearheaded business development initiatives, establishing key partnerships and driving revenue growth. Successfully negotiated and closed strategic deals with major industry players."
    }
  ];

  const videos = [
    {
      youtubeId: "YOUR_YOUTUBE_ID_1",
      title: "Video Title 1",
      description: "Description of the first video content and what it showcases."
    },
    {
      youtubeId: "YOUR_YOUTUBE_ID_2",
      title: "Video Title 2",
      description: "Description of the second video content and what it showcases."
    },
    {
      youtubeId: "YOUR_YOUTUBE_ID_3",
      title: "Video Title 3",
      description: "Description of the third video content and what it showcases."
    },
    {
      youtubeId: "YOUR_YOUTUBE_ID_4",
      title: "Video Title 4",
      description: "Description of the fourth video content and what it showcases."
    }
  ];

  const duplicatedProjects = [...projects, ...projects];
  const duplicatedVideos = [...videos, ...videos];

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <BgVideoWrapper>
        <BgVideo autoPlay loop muted playsInline>
          <source src="/pink-wave.mp4" type="video/mp4" />
        </BgVideo>
      </BgVideoWrapper>
      <MainContent>
        <Navbar 
          onWorkClick={() => scrollToSection(workSectionRef)}
          onPowClick={() => scrollToSection(powSectionRef)}
          onCvClick={() => scrollToSection(cvSectionRef)}
        />
        <Hero />
      </MainContent>

      <Section ref={workSectionRef} data-section="work">
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
        <SubHeading>other Projects</SubHeading>
        <ImageCardsContainer>
          <ImageCardsWrapper
            animate={{
              x: [0, -2400],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            style={{ animationPlayState: isHovered ? 'paused' : 'running' }}
          >
            {duplicatedProjects.map((project, index) => (
              <ImageCard 
                key={index}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <CardImage src={project.image} alt={project.title} />
                <CardContent>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
              </ImageCard>
            ))}
          </ImageCardsWrapper>
        </ImageCardsContainer>
      </Section>

      <Section ref={powSectionRef}>
        <SubHeading>POW</SubHeading>
        <ImageCardsContainer>
          <ImageCardsWrapper
            animate={{
              x: [0, -2400],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            style={{ animationPlayState: isVideoHovered ? 'paused' : 'running' }}
          >
            {duplicatedVideos.map((video, index) => (
              <VideoCard 
                key={index}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                onHoverStart={() => setIsVideoHovered(true)}
                onHoverEnd={() => setIsVideoHovered(false)}
              >
                <VideoEmbed>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </VideoEmbed>
                <CardContent>
                  <CardTitle>{video.title}</CardTitle>
                  <CardDescription>{video.description}</CardDescription>
                </CardContent>
              </VideoCard>
            ))}
          </ImageCardsWrapper>
        </ImageCardsContainer>
      </Section>

      <Section ref={cvSectionRef}>
        {/* Add your CV section content here */}
      </Section>
    </div>
  );
}

export default App;
