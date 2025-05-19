import styled from 'styled-components';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  margin-top: 8rem;
`;

const Asterisk = styled.div`
  font-size: 7vw;
  font-family: 'Cormorant Garamond', serif;
  
  font-weight: 700;
  color: #111;
  margin-bottom: -2rem;
`;

const Name = styled.h1`
  font-family: 'Cormorant Garamond', serif;
  font-size: 7vw;
  font-weight: 800;
  margin: 0;
  z-index: 2;
  text-align: center;
  text-shadow:
    0 0 2px #fff,
    0 0 4px #fff,
    0 0 8px #fff;
`;

const ArchVideo = styled.div`
  width: 320px;
  height: 420px;
  background: #e6d3b3;
  border-radius: 160px 160px 0 0 / 220px 220px 0 0;
  margin: 0 auto;
  margin-top: -3.5vw;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  box-shadow: 0 8px 32px rgba(0,0,0,0.07);
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
  background: rgba(0,0,0,0.4);
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
      <Asterisk>*</Asterisk>
      <Name>Aditi Gupta</Name>
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
    </HeroContainer>
  );
};

export default Hero; 