import React from "react";
import styled, { keyframes, css } from "styled-components";
import { motion } from "framer-motion";
import { FaReact, FaJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiRedux, SiSass } from "react-icons/si";

// --- TypeScript Interfaces ---
interface OrbitPlaneProps {
  $angle: number;
}

interface OrbitRingProps {
  $duration: number;
  $reverse?: boolean;
}

interface ElectronWrapperProps {
  $pos: "top" | "bottom";
}

// Added animation props to Electron to avoid fragile nested selectors
interface ElectronProps {
  $color: string;
  $duration: number;
  $reverse?: boolean;
  $angle: number;
}

const HeroAtom = () => {
  return (
    <AtomContainer>
      {/* --- Nucleus (Avatar) --- */}
      {/* REMOVED z-index: 10 so electrons can pass in front */}
      <Nucleus
        as={motion.div}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "backOut" }}
      >
        <div className="avatar-wrapper">
          <img src="/2.jpg" alt="yousef~Al~noumany" className="avatar" />
        </div>
      </Nucleus>

      {/* --- Orbit 1 (Flat - 0deg) --- */}
      <OrbitPlane $angle={0}>
        <OrbitRing $duration={10}>
          <ElectronWrapper $pos="top">
            {/* Pass animation props directly to Electron */}
            <Electron $color="#61dafb" $duration={10} $angle={0}>
              <FaReact />
            </Electron>
          </ElectronWrapper>
          <ElectronWrapper $pos="bottom">
            <Electron $color="#ffffff" $duration={10} $angle={0}>
              <SiNextdotjs />
            </Electron>
          </ElectronWrapper>
        </OrbitRing>
      </OrbitPlane>

      {/* --- Orbit 2 (Tilted 60deg) --- */}
      <OrbitPlane $angle={60}>
        <OrbitRing $duration={14} $reverse>
          <ElectronWrapper $pos="top">
            <Electron $color="#06b6d4" $duration={14} $angle={60} $reverse>
              <SiTailwindcss />
            </Electron>
          </ElectronWrapper>
          <ElectronWrapper $pos="bottom">
            <Electron $color="#764abc" $duration={14} $angle={60} $reverse>
              <SiRedux />
            </Electron>
          </ElectronWrapper>
        </OrbitRing>
      </OrbitPlane>

      {/* --- Orbit 3 (Tilted -60deg) --- */}
      <OrbitPlane $angle={-60}>
        <OrbitRing $duration={18}>
          <ElectronWrapper $pos="top">
            <Electron $color="#f7df1e" $duration={18} $angle={-60}>
              <FaJs />
            </Electron>
          </ElectronWrapper>
          <ElectronWrapper $pos="bottom">
            <Electron $color="#cc6699" $duration={18} $angle={-60}>
              <SiSass />
            </Electron>
          </ElectronWrapper>
        </OrbitRing>
      </OrbitPlane>
    </AtomContainer>
  );
};

/* --- ANIMATIONS --- */
// 1. The Ring Spin (Carries the electron wrapper)
const spin = keyframes`
  0% { transform: rotateZ(0deg); }
  100% { transform: rotateZ(360deg); }
`;

const spinReverse = keyframes`
  0% { transform: rotateZ(360deg); }
  100% { transform: rotateZ(0deg); }
`;

// 2. The Counter Rotation (Keeps the icon upright)
// The logic: Rotate OPPOSITE to the ring spin, then UN-TILT the X-axis, then UN-ROTATE the Plane Z-axis.
const counterRotate = (angle: number) => keyframes`
  0% { transform: rotateZ(360deg) rotateX(-70deg) rotateZ(${-angle}deg); }
  100% { transform: rotateZ(0deg) rotateX(-70deg) rotateZ(${-angle}deg); }
`;

const counterRotateReverse = (angle: number) => keyframes`
  0% { transform: rotateZ(0deg) rotateX(-70deg) rotateZ(${-angle}deg); }
  100% { transform: rotateZ(360deg) rotateX(-70deg) rotateZ(${-angle}deg); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const shine = keyframes`
  0% { left: -150%; }
  20% { left: 150%; }
  100% { left: 150%; }
`;

/* --- STYLED COMPONENTS --- */
const AtomContainer = styled.div`
  position: relative;
  width: 320px;
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px; /* Essential for 3D */
  margin: 0 auto 2rem auto;

  /* Ensure children interact in 3D space correctly */
  transform-style: preserve-3d;

  @media (max-width: 768px) {
    width: 260px;
    height: 260px;
  }
`;

const Nucleus = styled.div`
  position: relative;
  width: 140px;
  height: 140px;
  /* z-index: 10;  <-- REMOVED to allow electrons to pass in front */
  border-radius: 50%;
  padding: 5px;
  background: linear-gradient(
    135deg,
    rgba(50, 50, 50, 1) 0%,
    rgba(20, 20, 20, 1) 100%
  );
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5),
    inset 0 0 20px rgba(255, 255, 255, 0.05);
  animation: ${float} 6s ease-in-out infinite;
  transform-style: preserve-3d; /* Keep nucleus in 3D space */

  .avatar-wrapper {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    background: #fff;
    /* Ensure image doesn't flicker during 3D transform */
    backface-visibility: hidden;

    .avatar {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: -150%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.4) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      transform: skewX(-25deg);
      animation: ${shine} 4s ease-in-out infinite;
    }
  }

  @media (max-width: 768px) {
    width: 110px;
    height: 110px;
  }
`;

const OrbitPlane =
  styled.div <
  OrbitPlaneProps >
  `
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
  align-items: center;
  
  /* The plane is rotated Z (angle) then tilted X (70deg) */
  transform: rotateZ(${(props) => props.$angle}deg) rotateX(70deg);
`;

const OrbitRing =
  styled.div <
  OrbitRingProps >
  `
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transform-style: preserve-3d;
  will-change: transform;
  
  animation: ${(props) => (props.$reverse ? spinReverse : spin)} 
    ${(props) => props.$duration}s linear infinite;
`;

const ElectronWrapper =
  styled.div <
  ElectronWrapperProps >
  `
  position: absolute;
  width: 40px;
  height: 40px;
  /* Use translate to center perfectly instead of negative margins */
  transform: translate(-50%, -50%);
  transform-style: preserve-3d;

  ${(props) =>
    props.$pos === "top" &&
    css`
      top: 0;
      left: 50%;
    `}

  ${(props) =>
    props.$pos === "bottom" &&
    css`
      top: 100%;
      left: 50%;
    `}

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

const Electron =
  styled.div <
  ElectronProps >
  `
  width: 100%;
  height: 100%;
  background-color: rgba(30, 30, 35, 0.95);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px rgba(100, 100, 255, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: ${(props) => props.$color};
  font-size: 1.4rem;
  will-change: transform;

  /* Apply counter-rotation here directly based on props */
  animation: ${(props) =>
    props.$reverse
      ? counterRotateReverse(props.$angle)
      : counterRotate(props.$angle)} 
    ${(props) => props.$duration}s linear infinite;
  
  svg {
    filter: drop-shadow(0 0 2px ${(props) => props.$color});
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export default HeroAtom;
