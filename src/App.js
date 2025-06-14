import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

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
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 4rem 0 2rem 0;
  }
`;

const CardsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  max-width: 1000px;
  margin: 0 auto 2rem auto;
  @media (max-width: 768px) {
    gap: 2rem;
    padding: 0 1rem;
  }
`;

const CardsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.5rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
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
  @media (max-width: 768px) {
    height: ${props => props.isLarge ? '500px' : '250px'};
    border-radius: 1rem;
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
  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0.75rem;
  }
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
  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 1rem;
  }
`;

const ListItem = styled.div`
  margin-bottom: 0.8rem;
  line-height: 1.4;
  font-size: 0.95rem;
  &:last-child {
    margin-bottom: 0;
  }
  @media (max-width: 768px) {
    font-size: 0.85rem;
    margin-bottom: 0.6rem;
  }
`;

const SubHeading = styled.h2`
  font-family: 'Caudex', serif;
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  margin: 6rem 0 3rem 0;
  color: #222;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 3rem 0 2rem 0;
  }
`;

const ImageCardsContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  margin: 0 auto 6rem auto;
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 1rem 0;
    margin-bottom: 3rem;
  }
`;

const ImageCardsWrapper = styled(motion.div)`
  display: flex;
  gap: 2rem;
  padding: 0 2rem;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 768px) {
    gap: 1rem;
    padding: 0 1rem;
    justify-content: center;
  }
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border: 1px solid #ececec;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  z-index: 2;
  &:hover {
    background: #f5f5f5;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &.prev {
    left: 1rem;
  }
  &.next {
    right: 1rem;
  }
  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
    &.prev {
      left: 0.5rem;
    }
    &.next {
      right: 0.5rem;
    }
  }
`;

const ImageCard = styled(motion.div)`
  min-width: 370px;
  width: 380px;
  height: 450px;
  display: flex;
  flex-direction: column;
  background: white;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.07);
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  overflow: hidden;
  @media (max-width: 768px) {
    min-width: 280px;
    width: 280px;
    height: 350px;
    padding: 0.5rem;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 0.5rem;
`;

const CardContent = styled.div`
  display: none;
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
  @media (max-width: 768px) {
    min-width: 250px;
    padding: 0.5rem;
  }
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

const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  margin: 0 1rem;
  background: #f3e5dc;
  color: #222;
  font-family: 'Caudex', serif;
  font-size: 1.1rem;
  text-decoration: none;
  border-radius: 2rem;
  border: 1.5px solid #ececec;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    margin: 0.5rem;
  }
`;

const ContactButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

function App() {
  const [isVideoHovered, setIsVideoHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  const workSectionRef = useRef(null);
  const powSectionRef = useRef(null);
  const powHeadingRef = useRef(null);
  const cvSectionRef = useRef(null);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - (isMobile ? 1 : 3)));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(
      projects.length - (isMobile ? 1 : 3),
      prev + (isMobile ? 1 : 3)
    ));
  };

  const projects = [
    {
      image: "/projects/image7.png",
      title: "Supra Community Innovation",
      description: "Pioneering innovative approaches in Supra's community and ecosystem development",
      link: "https://x.com/SUPRA_Labs/status/1864279428601401708"
    },
    {
      image: "/projects/image3.png",
      title: "Supra Community Leadership",
      description: "Leading initiatives and driving growth in Supra's ecosystem",
      link: "https://x.com/SUPRA_Labs/status/1883791812021879101"
    },
    {
      image: "/projects/image6.png",
      title: "Supra Community Excellence",
      description: "Demonstrating excellence in community building and ecosystem development",
      link: "https://x.com/SUPRA_Labs/status/1914688265652736443"
    },
    {
      image: "/projects/image1.png",
      title: "Supra Community Impact",
      description: "Making significant contributions to Supra's community development and ecosystem growth",
      link: "https://x.com/SUPRA_Labs/status/1778921240985817303"
    },
    {
      image: "/projects/image2.png",
      title: "Supra Community Recognition",
      description: "Recognized for outstanding contributions to Supra's community and ecosystem development",
      link: "https://x.com/SUPRA_Labs/status/1818479104670548370"
    },
    {
      image: "/projects/image4.png",
      title: "Supra Community Engagement",
      description: "Driving community engagement and ecosystem development at Supra",
      link: "https://x.com/SUPRA_Labs/status/1831184908561056222"
    },
    {
      image: "/projects/image5.png",
      title: "Supra Community Development",
      description: "Contributing to Supra's community growth and ecosystem development",
      link: "https://x.com/SUPRA_Labs/status/1816312113947893839"
    },
    {
      image: "/projects/image8.png",
      title: "Supra Community Achievement",
      description: "Showcasing achievements and milestones in Supra's ecosystem development",
      link: "https://x.com/SUPRA_Labs/status/1839983395314475505"
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
      imageUrl: `${process.env.PUBLIC_URL}/twitter/tweet1.jpg`
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
      imageUrl: `${process.env.PUBLIC_URL}/twitter/tweet2.jpg`
    },
    {
      type: 'twitter',
      tweetId: "1590686963056922625",
      imageUrl: `${process.env.PUBLIC_URL}/twitter/tweet3.jpg`
    },
    {
      type: 'twitter',
      tweetId: "1586709625348722688",
      imageUrl: `${process.env.PUBLIC_URL}/twitter/tweet4.jpg`
    },
    {
      type: 'twitter',
      tweetId: "1583103610124087296",
      imageUrl: `${process.env.PUBLIC_URL}/twitter/tweet5.jpg`
    }
  ];

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
          onPowClick={() => scrollToSection(powHeadingRef)}
          onCvClick={() => scrollToSection(cvSectionRef)}
        />
        <Hero />
      </MainContent>

      <Section ref={workSectionRef} data-section="work" id="pow">
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
                <CardTopic>Nordek (L2)</CardTopic>
                <CardExp>
                  <ListItem>• Led the growth team that had to oversee ecosystem expansion for L2</ListItem>
                  <ListItem>• Projects launched included a staking + bridging integrated DEX, a web3 payments platform, and a launchpad</ListItem>
                  <ListItem>• Led project incubation by connecting 5 VC firms and 10+ accelerators, MM, accelerators, audit providers, developer communities, and infrastructure SDKs within the ecosystem</ListItem>
                  <ListItem>• Grew social channels to 7k organic members in 3 months</ListItem>
                  <ListItem>• Helped raise $350k in less than 5 minutes for the pre-seed round of our first project in Launchpad</ListItem>
                  <ListItem>• Other miscellaneous KPIs included assisting marketing with KOL, BD strategy, PR connects, content reviews, and the ambassador program</ListItem>
                </CardExp>
              </WorkCard>
              <WorkCard>
                <CardTopic>Coinswitch Kuber (India's largest CEX)</CardTopic>
                <CardExp>
                  <ListItem>• Managed campaigns, giveaways, content buckets, and feed structures for Instagram, Twitter, and Linkedin</ListItem>
                  <ListItem>• Helped in brand initiatives with celebrities and ambassadors</ListItem>
                  <ListItem>• Created weekly newsletters via trend analysis, market research, and competitive analysis</ListItem>
                  <ListItem>• Gained experience in social media and other analytical tools like Meltwater, HubSpot, and Social Sprout</ListItem>
                </CardExp>
              </WorkCard>
            </RightCardsContainer>
          </CardsRow>
          <CardsRow>
            <WorkCard>
              <CardTopic>Cruize Finance (Defi)</CardTopic>
              <CardExp>
                <ListItem>• Led 5+ product integrations (vaults) with Yearn Finance, bond protocol, graph, ape swap, and impossible finance</ListItem>
                <ListItem>• Led socials to 22k+ on twitter and 10k+ on discord</ListItem>
                <ListItem>• Strategy lead on content marketing in newsletter, emails, and Medium articles</ListItem>
                <ListItem>• Led SM campaigns, KOL marketing, and podcasts</ListItem>
                <ListItem>• Hosted IRL events during India Blockchain Week with a turnout of over 3500+ people</ListItem>
                <ListItem>• Managed BD partnerships, along with being the spokesperson for Cruize at blockchain-related events</ListItem>
              </CardExp>
            </WorkCard>
            <WorkCard>
              <CardTopic>Asva Labs (Venture Capital firm)</CardTopic>
              <CardExp>
                <ListItem>• Executed marketing campaigns for clients building metaverse and launching ICO</ListItem>
                <ListItem>• Managed content and campaigns on Twitter, Telegram, and Medium</ListItem>
                <ListItem>• Grew socials by 15K+ members in a span of 7 months</ListItem>
                <ListItem>• Held client negotiations and product developments for various NFT projects</ListItem>
                <ListItem>• Sold marketing plans for NFT project launches</ListItem>
                <ListItem>• Headed the inception of Meta-club DAO for the company</ListItem>
              </CardExp>
            </WorkCard>
          </CardsRow>
        </CardsGrid>
        <SubHeading ref={powHeadingRef}>POW</SubHeading>
        <ImageCardsContainer>
          <NavigationButton 
            className="prev" 
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            ←
          </NavigationButton>
          <ImageCardsWrapper>
            {projects.slice(
              currentIndex,
              currentIndex + (isMobile ? 1 : 3)
            ).map((project, index) => (
              <ImageCard 
                key={index}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                onHoverStart={() => setIsVideoHovered(true)}
                onHoverEnd={() => setIsVideoHovered(false)}
                as={project.link ? 'a' : 'div'}
                href={project.link}
                target={project.link ? '_blank' : undefined}
                rel={project.link ? 'noopener noreferrer' : undefined}
              >
                <CardImage src={project.image} alt={project.title} />
                <CardContent>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
              </ImageCard>
            ))}
          </ImageCardsWrapper>
          <NavigationButton 
            className="next" 
            onClick={handleNext}
            disabled={currentIndex >= projects.length - (isMobile ? 1 : 3)}
          >
            →
          </NavigationButton>
        </ImageCardsContainer>
      </Section>

      <Section ref={powSectionRef} >
        <SubHeading>Speaker sessions</SubHeading>
        <ImageCardsContainer>
          <ImageCardsWrapper
            animate={{
              x: [0, -2400],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
                repeatDelay: 0
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
                      alt="Tweet"
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
        <SubHeading>Contact here!</SubHeading>
        <ContactButtonsContainer>
          <ContactButton 
            href="https://calendly.com/aditi77/aditi-intro" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Schedule a Call
          </ContactButton>
          <ContactButton 
            href="https://t.me/OnchainAditi" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Telegram
          </ContactButton>
        </ContactButtonsContainer>
      </Section>
    </div>
  );
}

export default App;
