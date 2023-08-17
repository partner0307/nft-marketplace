import styled from 'styled-components';
import { GV } from '../../../../../utils/style.util';

export const CollectionContainer = styled.div`
    background: linear-gradient(360deg, rgba(4, 40, 62, 0.70) 0%, rgba(7, 79, 90, 0.70) 100%);
    padding: 120px 128px;
    position: relative;
    display: flex;
    justify-content: center;
`;

export const CollectionWrapper = styled.div`
    max-width: 1440px;
`

export const ContentColor = styled.div`
    background-image: ${GV('gradient')};
    -webkit-background-clip: text;
    color: transparent;
`;

export const ArrowButton = styled.div`
    background: ${GV('gradient')};
    border-radius: 999px;
    padding: 10px;
    display: flex;
    align-items: center;
    position: relative;
`;

export const ArrowContainer = styled.div`
    position: absolute;
    top: 35%;
    left: 35%;
`

export const CardContainer = styled.div`
    padding: 30px 24px 18px;
    border: 2px solid ${GV('info')};
    border-radius: 12px 0 0 12px;
    background: ${GV('info')};
`;

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
    background: #C1EBED;
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
    background: #C1EBED;
`;

export const CardContainer1 = styled.div`
    display: flex;
    flex-direction: column;
    padding: 18px 0 0 24px;
    align-items: flex-start;
    gap: 34px;
    border-radius: 0px 12px 12px 0px;
    border: 2px solid ${GV('info')};
    background: linear-gradient(217deg, rgba(61, 255, 243, 0.30) 1.04%, rgba(195, 146, 220, 0.30) 38.76%, rgba(205, 154, 43, 0.16) 100%);
    backdrop-filter: blur(10px);
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
    background: ${GV('info')};
`;

export const SlideCard = styled.div`
    padding: 6px;
    border-radius: 8px;
    background: rgba(61, 255, 243, 0.30);
`;

export const Cursor = styled.div<{isSelected: boolean}>`
    width: 24px;
    height: 24px;
    border-radius: 100px;
    /* border-image: ${GV('gradient')}; */
    border: 1px solid;
    ${({ isSelected }) => isSelected ? `background: ${GV('gradient')};` : ``}
`;

export const Rect1 = styled.div`
    position: absolute;
    top: -70px;
    left: -150px;
    width: 440px;
    height: 480px;
    border-radius: 487px;
    background: rgba(61, 255, 243, 0.30);
    filter: blur(150px);
`;

export const Rect2 = styled.div`
    position: absolute;
    top: -114px;
    right: 0px;
    width: 420px;
    height: 470px;
    border-radius: 472px;
    background: rgba(255, 61, 247, 0.30);
    filter: blur(150px);
`;

export const Rect3 = styled.div`
    position: absolute;
    left: -270px;
    bottom: 200px;
    width: 555px;
    height: 555px;
    border-radius: 555px;
    background: rgba(235, 104, 187, 0.30);
    filter: blur(150px);
`