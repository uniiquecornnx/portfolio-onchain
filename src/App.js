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
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageCardsWrapper = styled(motion.div)`
  display: flex;
  gap: 2rem;
  padding: 0 2rem;
  max-width: 1200px;
  margin: 0 auto;
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
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const workSectionRef = useRef(null);
  const powSectionRef = useRef(null);
  const cvSectionRef = useRef(null);
  
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
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

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(projects.length - 3, prev + 1));
  };

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
              <CardTopic>Cruize Finance (TradFi)</CardTopic>
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
        <SubHeading>Accomplishments</SubHeading>
        <ImageCardsContainer>
          <NavigationButton 
            className="prev" 
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            ←
          </NavigationButton>
          <ImageCardsWrapper>
            {projects.slice(currentIndex, currentIndex + 3).map((project, index) => (
              <ImageCard 
                key={index}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
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
            disabled={currentIndex >= projects.length - 3}
          >
            →
          </NavigationButton>
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
