import styled from 'styled-components';
import Background from '@/assets/img/background.png';

export const HeroContainer = styled.div`
    background: no-repeat url(${Background});
    background-position: top center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    gap: 38px;
    padding: 4rem 2rem;
`;

export const HeroWrapper = styled.div`
    max-width: 1440px;
    align-self: center;
    display: flex;
    align-items: flex-end;
    gap: 2rem;
`

export const DownButton = styled.button`
    display: flex;
    height: 112px;
    margin: 38px 0 86px 0;
    padding: 0 16px;
    justify-content: center;
    align-items: center;
    border-radius: 18px;
    border: 1px solid rgba(198, 224, 255, 0.50);
    background: rgba(9, 82, 168, 0.20);
    backdrop-filter: blur(10px);
`