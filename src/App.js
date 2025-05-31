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
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  max-width: 1000px;
  margin: 0 auto 2rem auto;
  @media (max-width: 900px) {
    gap: 2rem;
  }
`;

const CardsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.5rem;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const WorkCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${props => props.isLarge ? '650px' : '300px'};
  background: #fff;
  border-radius: 2rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.07);
  overflow: hidden;
  border: 1.5px solid #ececec;
  @media (max-width: 600px) {
    width: 90vw;
    height: ${props => props.isLarge ? '110vw' : '55vw'};
    min-height: 200px;
  }
`;

const CardTopic = styled.div`
  width: 100%;
  background: #f3e5dc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Caudex', serif;
  font-size: 1.3rem;
  font-weight: 400;
  color: #222;
  padding: 1rem;
`;

const CardExp = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  font-family: 'Caudex', serif;
  font-size: 1rem;
  color: #222;
  padding: 1.5rem;
  background: #faf9f6;
  overflow-y: auto;
`;

const ListItem = styled.div`
  margin-bottom: 0.8rem;
  line-height: 1.4;
  font-size: 0.95rem;
  &:last-child {
    margin-bottom: 0;
  }
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
  min-width: 300px;
  display: flex;
  flex-direction: column;
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.07);
  cursor: pointer;
`;

const VideoEmbed = styled.div`
  width: 100%;
  height: 180px;
  border-radius: 0.5rem;
  overflow: hidden;
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const TwitterImage = styled.div`
  width: 100%;
  height: 180px;
  border-radius: 0.5rem;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Section = styled.div`
  scroll-margin-top: 80px;
`;

const RightCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  height: 100%;
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
      type: 'youtube',
      youtubeId: "mtKt64lVrmU"
    },
    {
      type: 'twitter',
      tweetId: "1808796890122621249",
      imageUrl: "/twitter/tweet1.jpg"
    },
    {
      type: 'youtube',
      youtubeId: "DVzc19Jydac"
    },
    {
      type: 'youtube',
      youtubeId: "cxNryhIlBgI"
    },
    {
      type: 'twitter',
      tweetId: "1684632964049829888",
      imageUrl: "/twitter/tweet2.jpg"
    },
    {
      type: 'twitter',
      tweetId: "1590686963056922625",
      imageUrl: "/twitter/tweet3.jpg"
    },
    {
      type: 'twitter',
      tweetId: "1586709625348722688",
      imageUrl: "/twitter/tweet4.jpg"
    },
    {
      type: 'twitter',
      tweetId: "1583103610124087296",
      imageUrl: "/twitter/tweet5.jpg"
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
        <CardsGrid>
          <CardsRow>
            <WorkCard isLarge>
              <CardTopic>Supra Labs (L1 w integrated oracles)</CardTopic>
              <CardExp>
                <ListItem>• Led Dapp clients for oracle integration across 12 major ecosystems</ListItem>
                <ListItem>• Assisted MOU deals for a pipeline of 1500+ projects to build on L1</ListItem>
                <ListItem>• Led BD for 5 dapps which went live on L1 within 3 months of MoveVM mainnet</ListItem>
                <ListItem>• Assisted in Narrative positioning, KOL, and podcast strategy pre-TGE marketing</ListItem>
                <ListItem>• Led UAE expansion for BD and funds allocation</ListItem>
                <ListItem>• Curated ecosystem incentive and vaults program design (Super dapp showdown, Citadel vaults, grants program)</ListItem>
                <ListItem>• Project lead for global affiliates campaign, Supra Spartans (6k+ applications in cohort 1)</ListItem>
                <ListItem>• Project lead for on-chain and off-chain bounty design in the Spartans program, along with ecosystem and dev bounties</ListItem>
                <ListItem>• Led developer adoption and hackathon inception in APAC, onboarded 400+ Move devs</ListItem>
                <ListItem>• Led strategy, execution, and hosted for IRL hands-on dev workshop across APAC with 700+ attendees in total</ListItem>
                <ListItem>• Led event strategy for KBW, token2049 SG, IBW, ETH Denver, and token2049 Dubai</ListItem>
                <ListItem>• Project and strategy lead for Demo day at KBW (labeled as the most ROI generating event for Supra)</ListItem>
              </CardExp>
            </WorkCard>
            <RightCardsContainer>
              <WorkCard>
                <CardTopic>Heading</CardTopic>
                <CardExp>Body</CardExp>
              </WorkCard>
              <WorkCard>
                <CardTopic>Heading</CardTopic>
                <CardExp>Body</CardExp>
              </WorkCard>
            </RightCardsContainer>
          </CardsRow>
          <CardsRow>
            <WorkCard>
              <CardTopic>Heading</CardTopic>
              <CardExp>Body</CardExp>
            </WorkCard>
            <WorkCard>
              <CardTopic>Heading</CardTopic>
              <CardExp>Body</CardExp>
            </WorkCard>
          </CardsRow>
        </CardsGrid>
        <SubHeading>Accomplishments</SubHeading>
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
                {video.type === 'youtube' ? (
                  <VideoEmbed>
                    <iframe
                      src={`https://www.youtube.com/embed/${video.isPlaylist ? 'videoseries?list=' + video.youtubeId : video.youtubeId}`}
                      title="YouTube video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </VideoEmbed>
                ) : (
                  <TwitterImage 
                    onClick={() => window.open(`https://twitter.com/AM_igdtuw/status/${video.tweetId}`, '_blank')}
                  >
                    <img 
                      src={video.imageUrl} 
                      alt="Tweet image"
                      loading="lazy"
                    />
                  </TwitterImage>
                )}
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
