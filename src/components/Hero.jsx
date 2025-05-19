import styled from 'styled-components';
import { useRef } from 'react';
import { motion } from 'framer-motion';

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  margin-top: 2rem;
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
  height: 70%;
  object-fit: cover;
  display: block;
`;

const Hero = () => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
  };

  return (
    <HeroContainer>
      <Asterisk>*</Asterisk>
      <Name>Aditi Gupta</Name>
      <ArchVideo>
        <StyledVideo
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <source src="aditi-3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </StyledVideo>
      </ArchVideo>
    </HeroContainer>
  );
};

export default Hero; 