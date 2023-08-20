import styled from 'styled-components';

export const BuildDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    padding: 24px 32px;
`;

export const BuildDetailsWrapper = styled.div`
    max-width: 1440px;
    display: flex;
    gap: 32px;
`;

export const Rect = styled.div`
    position: absolute;
    top: 283px;
    left: 59px;
    width: 450px;
    height: 447px;
    flex-shrink: 0;
    border-radius: 450px;
    background: rgba(235, 104, 198, 0.20);
`;

export const Rect1 = styled.div`
    position: absolute;
    top: 199px;
    right: -253px;
    width: 450px;
    height: 447px;
    flex-shrink: 0;
    border-radius: 450px;
    background: rgba(104, 196, 235, 0.20);
`