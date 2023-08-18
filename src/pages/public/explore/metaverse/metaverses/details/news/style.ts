import styled from 'styled-components';

export const NewsContainer = styled.div`
    position: relative;
    display: flex;
    padding: 32px 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    margin-top: 24px;
    border-radius: 16px;
    border: 1px solid #1E1E20;
    background: rgba(12, 13, 14, 0.80);
`;

export const Rect = styled.div`
    position: absolute;
    bottom: 58px;
    right: 45%;
    width: 700px;
    height: 749px;
    flex-shrink: 0;
    border-radius: 749px;
    background: rgba(235, 104, 198, 0.15);
    filter: blur(150px);
`