import styled from 'styled-components';
import { GV } from '@/utils/style.util';
import Avatar from "@/assets/img/avatar2.png";

export const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 120px 32px 0;
  position: relative;
  background: #1E2121;
`;

export const BlogWrapper = styled.div`
  display: flex;
  gap: 2rem;
  padding: 64px 32px;
  border-radius: 24px;
  background: rgba(19, 19, 19, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  z-index: 100;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;

export const MainBlog = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 18px;
  border: 1px solid #222;
  background: #191919;
  padding: 16px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const ContentColor = styled.div`
  background-image: ${GV('gradient')};
  -webkit-background-clip: text;
  color: transparent;
`;

export const BlogImage = styled.img`
  border-radius: 18px;
  width: 100%;
`;

export const SmallBlog = styled.div`
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

export const Avatar1 = styled.div`
  position: absolute;
  top: 0;
  left: 45%;
  width: 138px;
  height: 138px;
  background: no-repeat url(${Avatar});
  background-size: cover;
  background-position: center;
  border-radius: 138px;
  border: 2px solid #6ed8d2;
  z-index: 1;

  @media (max-width: 1024px) {
    width: 120px;
    height: 120px;
  }
`;

export const Avatar2 = styled.div`
  position: absolute;
  top: 100px;
  left: 55%;
  width: 173px;
  height: 173px;
  background: no-repeat url(${Avatar});
  background-size: cover;
  background-position: center;
  border-radius: 173px;
  border: 2px solid #6ed8d2;
  z-index: 1;

  @media (max-width: 1024px) {
    width: 150px;
    height: 150px;
    left: 60%;
  }
`;

export const Avatar3 = styled.div`
  position: absolute;
  bottom: 70px;
  left: 50%;
  width: 229px;
  height: 229px;
  background: no-repeat url(${Avatar});
  background-size: cover;
  background-position: center;
  border-radius: 229px;
  border: 2px solid #6ed8d2;
  z-index: 1;

  @media (max-width: 1024px) {
    width: 200px;
    height: 200px;
  }
`;

export const Line = styled.div`
  position: absolute;
  top: 100px;
  left: 50%;
  z-index: 0;
`;
