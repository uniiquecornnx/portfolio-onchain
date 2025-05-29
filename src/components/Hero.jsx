import styled from 'styled-components';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import '@fontsource/caudex/400.css';
import Categories from './Categories';

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
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`;

const Asterisk = styled.div`
  font-size: 7vw;
  font-family: 'Caudex', serif;
  font-weight: 300;
  text-shadow:
    0 0 2px #fff,
    0 0 4px #fff,
    0 0 8px #fff;
  color: #111;
  margin-bottom: -1rem;
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
`;

const Introduction = styled.p`
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.7rem;
  color: #222;
  margin-top: 2rem;
  max-width: 1000px;
  line-height: 1.4;
  font-weight: 500;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2rem;
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
        <Introduction>
          A passionate professional with expertise in growth, marketing, and business development. 
          Creating impactful solutions and driving success through innovative strategies.
        </Introduction>
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
        <Categories />
      </RightSection>
    </HeroContainer>
  );
};

export default Hero; 