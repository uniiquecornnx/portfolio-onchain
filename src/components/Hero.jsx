import styled from 'styled-components';
import { useRef, useState } from 'react';
import '@fontsource/caudex/400.css';

const HeroContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: 60vh;
  margin-top: 8rem;
  padding: 0 5rem;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 2rem;
    margin-top: 4rem;
    min-height: auto;
    gap: 2rem;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  margin-top: -1rem;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    margin-top: 0;
  }
`;

const Name = styled.h1`
  font-family: 'Caudex', serif;
  font-size: 6.3vw;
  font-weight: 1400;
  margin: 0;
  z-index: 2;
  text-align: left;
  color: rgb(0, 0, 0);
  text-shadow:
    0 0 2px #fff,
    0 0 4px #fff,
    0 0 8px #fff;

  @media (max-width: 768px) {
    font-size: 12vw;
    text-align: center;
  }
`;

const Introduction = styled.p`
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.7rem;
  color: #222;
  margin-top: 2rem;
  max-width: 1000px;
  line-height: 1.4;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-top: 1.5rem;
    text-align: center;
  }
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2rem;

  @media (max-width: 768px) {
    align-items: center;
    width: 100%;
  }
`;

const ArchVideo = styled.div`
  width: 300px;
  height: 500px;
  background: #e6d3b3;
  border-radius: 200px 200px 200px 200px / 150px 150px 150px 150px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  box-shadow: 0 8px 32px #fff;

  @media (max-width: 768px) {
    width: 250px;
    height: 400px;
    border-radius: 150px 150px 150px 150px / 100px 100px 100px 100px;
  }
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  cursor: pointer;
`;

const UnmuteOverlay = styled.div`
  position: absolute;
  left: 50%;
  top: 70%;
  transform: translate(-50%, -50%);
  background: rgba(205, 140, 179, 0.4);
  color: #fff;
  padding: 0.5rem 1.2rem;
  border-radius: 1.5rem;
  font-size: 1rem;
  pointer-events: none;
  opacity: ${props => (props.visible ? 1 : 0)};
  transition: opacity 0.2s;
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const InfoItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 1rem;
  margin-bottom: 0rem;

  @media (max-width: 768px) {
    align-items: center;
    gap: 1rem;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const InfoIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

const InfoText = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #444;
  font-weight: 400;
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 1.5rem;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const SocialIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Hero = () => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const handleVideoClick = () => {
    if (videoRef.current) {
      const newMuted = !muted;
      videoRef.current.muted = newMuted;
      setMuted(newMuted);
    }
  };

  return (
    <HeroContainer>
      <LeftSection>
        <Name>Aditi</Name>
        <InfoItems>
          <InfoItem>
            <InfoIcon src="/globe-icon.png" alt="Location" />
            <InfoText>Dubai, UAE</InfoText>
          </InfoItem>
          <InfoItem>
            <InfoIcon src="/bag-icon.png" alt="Work" />
            <InfoText>Growth & Marketing Professional</InfoText>
          </InfoItem>
          <InfoItem>
            <InfoIcon src="/letter-icon.png" alt="Email" />
            <InfoText>gaditi723@gmail.com</InfoText>
          </InfoItem>
        </InfoItems>
        <Introduction>
          A passionate professional with expertise in growth, marketing, and business development. 
          Creating impactful solutions and driving success through innovative strategies.
        </Introduction>
        <SocialLinks>
          <SocialLink href="https://www.linkedin.com/in/aditigupta77/" target="_blank" rel="noopener noreferrer">
            <SocialIcon src="/linkedin-icon.png" alt="LinkedIn" />
          </SocialLink>
          <SocialLink href="https://twitter.com/OnchainAditi" target="_blank" rel="noopener noreferrer">
            <SocialIcon src="/twitter-icon.png" alt="Twitter" />
          </SocialLink>
        </SocialLinks>
      </LeftSection>
      <RightSection>
        <ArchVideo>
          <VideoWrapper>
            <StyledVideo
              ref={videoRef}
              autoPlay
              loop
              muted={muted}
              playsInline
              onClick={handleVideoClick}
            >
              <source src="aditi-3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </StyledVideo>
            <UnmuteOverlay visible={muted}>||</UnmuteOverlay>
          </VideoWrapper>
        </ArchVideo>
      </RightSection>
    </HeroContainer>
  );
};

export default Hero; 