import styled, { keyframes } from "styled-components";
import { GV } from "@/utils/style.util";

const textAnimate = keyframes`
  0% {
    font-size: 3rem;
    background-image: ${GV("gradient")};
    -webkit-background-clip: text;
    color: transparent;
  }
  50% {
    font-size: ${GV('font-size-2')};
  }
  100% {
    font-size: 3rem;
    background-image: ${GV("gradient")};
    -webkit-background-clip: text;
    color: transparent;
  }
`;

const iconAnimate = keyframes`
  0% {
    transform: translate(-0.3rem, -0.3rem);
  }
  50% {
    transform: translate(0.3rem, 0.3rem);
  }
  100% {
    transform: translate(-0.3rem, -0.3rem);
  }
`;

const SvgAnimate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const CollectionContainer = styled.div`
  background: linear-gradient(
    360deg,
    rgba(4, 40, 62, 0.7) 0%,
    rgba(7, 79, 90, 0.7) 100%
  );
  padding: 120px 128px;
  position: relative;
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    padding: 120px 50px;
    width: 100%;
  }
`;

export const CollectionWrapper = styled.div`
  max-width: 1440px;
`;

export const ContentColor = styled.div`
  background-image: ${GV("gradient")};
  -webkit-background-clip: text;
  color: transparent;
`;

export const ArrowButton = styled.div`
  background: ${GV("gradient")};
  border-radius: 999px;
  padding: 10px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const ArrowContainer = styled.div`
  position: absolute;
  top: 37%;
  left: 40%;
`;

export const CardContainer = styled.div`
  padding: 30px 24px 18px;
  border: 2px solid ${GV("info")};
  border-radius: 12px 0 0 12px;
  background: ${GV("info")};

  @media (max-width: 1024px) {
    padding: 16px 12px 18px;
  }
`;

export const EffectText = styled.span`
  animation: ${textAnimate} 3s infinite linear;
  transition: all .3s ease-in;
`;

export const EffectIcon = styled.div`
  /* animation: ${iconAnimate} 3s infinite linear; */
  transition: all 0.5s ease-in-out;
`;

export const EffectSVG = styled.div`
  animation: ${SvgAnimate} 20s infinite linear;
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    animation-play-state: paused;
  }
`

export const CardWrapper = styled.div`
  position: relative;
`;

export const Mark1 = styled.div`
  position: absolute;
  top: 10px;
  right: 16px;
  display: inline-flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  background: #c1ebed;
  border-radius: 12px;
  gap: 4px;
`;

export const Mark2 = styled.div`
  position: absolute;
  bottom: 26px;
  left: 16px;
  display: inline-flex;
  padding: 6px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #c1ebed;
`;

export const CardContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px 0 0 24px;
  align-items: flex-start;
  gap: 34px;
  border-radius: 0px 12px 12px 0px;
  border: 2px solid ${GV("info")};
  background: linear-gradient(
    217deg,
    rgba(61, 255, 243, 0.3) 1.04%,
    rgba(195, 146, 220, 0.3) 38.76%,
    rgba(205, 154, 43, 0.16) 100%
  );
  backdrop-filter: blur(10px);

  @media (max-width: 1024px) {
    padding: 16px 16px 0 24px;
  }
`;

export const ProgressContainer = styled.div`
  display: flex;
  padding: 2px;
  width: 100%;
  border-radius: 12px;
  background: #464646;
`;

export const Progress = styled.div`
  height: 8px;
  min-width: 350px;
  border-radius: 12px;
  background: ${GV("info")};
`;

export const SlideCard = styled.div`
  padding: 6px;
  border-radius: 8px;
  background: rgba(61, 255, 243, 0.3);
`;

export const Cursor = styled.div<{ isSelected: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 100px;
  /* border-image: ${GV("gradient")}; */
  border: 1px solid;
  ${({ isSelected }) => (isSelected ? `background: ${GV("gradient")};` : ``)}
`;

export const Rect1 = styled.div`
  position: absolute;
  top: -70px;
  left: -150px;
  width: 440px;
  height: 480px;
  border-radius: 487px;
  background: rgba(61, 255, 243, 0.3);
  filter: blur(150px);
`;

export const Rect2 = styled.div`
  position: absolute;
  top: -114px;
  right: 0px;
  width: 420px;
  height: 470px;
  border-radius: 472px;
  background: rgba(255, 61, 247, 0.3);
  filter: blur(150px);
`;

export const Rect3 = styled.div`
  position: absolute;
  left: -270px;
  bottom: 200px;
  width: 555px;
  height: 555px;
  border-radius: 555px;
  background: rgba(235, 104, 187, 0.3);
  filter: blur(150px);
`;
