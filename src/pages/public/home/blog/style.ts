import styled from "styled-components";
import { GV } from "@/utils/style.util";

export const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 120px 32px 0;
  margin-bottom: -7rem;
  position: relative;
`;

export const BlogWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 64px 32px;
  border-radius: 24px;
  background: rgba(19, 19, 19, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  z-index: 100;
`;

export const MainBlog = styled.div`
  max-width: 548px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 18px;
  border: 1px solid #222;
  background: #191919;
  padding: 16px;
`;

export const ContentColor = styled.div`
  background-image: ${GV("gradient")};
  -webkit-background-clip: text;
  color: transparent;
`;

export const BlogImage = styled.img`
  border-radius: 18px;
  width: 100%;
`;

export const SmallBlog = styled.div`
  max-width: 340px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 18px;
  border: 1px solid #222;
  background: #191919;
  padding: 13px 16px 40px;
`;

export const Rect = styled.div`
  position: absolute;
  top: -11px;
  left: -237px;
  width: 603px;
  height: 826px;
  border-radius: 826px;
  background: rgba(104, 235, 172, 0.1);
  filter: blur(150px);
`;

export const Reveal = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  margin-top: -32px;
`;

export const Avatar1 = styled.img`
  position: absolute;
  top: 0;
  left: 45%;
  width: 138px;
  height: 138px;
  border-radius: 138px;
  border: 2px solid #6ed8d2;
  z-index: 1;
`;

export const Avatar2 = styled.img`
  position: absolute;
  top: 100px;
  left: 55%;
  width: 173px;
  height: 173px;
  border-radius: 173px;
  border: 2px solid #6ed8d2;
  z-index: 1;
`;

export const Avatar3 = styled.img`
  position: absolute;
  bottom: 70px;
  left: 50%;
  width: 229px;
  height: 229px;
  border-radius: 229px;
  border: 2px solid #6ed8d2;
  z-index: 1;
`;

export const Line = styled.div`
  position: absolute;
  top: 100px;
  left: 50%;
  z-index: 0;
`;

export const Newsletter = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: flex-start;
  max-width: 1090px;
  height: 350px;
  width: 100%;
  gap: 30px;
  border-radius: 24px;
  background: #6ed8d2;
  box-shadow: 0px 23px 30px 0px rgba(0, 0, 0, 0.5);
`;

export const NewsletterWrapper = styled.div`
  /* max-width: 1440px; */
`;

export const NewsImage1 = styled.img`
  width: 226px;
  height: 254px;
  border-radius: 0px 12px 12px 0px;
  box-shadow: 11px 0px 12px 0px rgba(0, 0, 0, 0.25);
  z-index: 3;
`;

export const NewsImage2 = styled.img`
  margin-left: -64px;
  width: 199px;
  height: 224px;
  border-radius: 12px;
  box-shadow: 8px 0px 10px 0px rgba(0, 0, 0, 0.25);
  z-index: 2;
`;

export const NewsImage3 = styled.img`
  margin-left: -64px;
  width: 174px;
  height: 196px;
  border-radius: 12px;
  z-index: 1;
`;
