import { GV } from '@/utils/style.util';
import styled from 'styled-components';
import Background from '@/assets/img/auth-background.gif';

export const SignupContainer = styled.div`
    position: relative;
    min-height: 100vh;
    padding-bottom: 2rem;

    &:before {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: no-repeat url(${Background}) top center;
        background-size: cover;
        background-color: #d3d3d388;
        z-index: -2;
        content: "";
    }

    &:after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #111111ee;
        z-index: -2;
        content: "";
    }
`

export const MarkBar = styled.div`
    padding: 4rem 5rem 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const JoinButton = styled.button`
    padding: 0.75rem 1.125rem;
    border-radius: 0.5rem;
    background:
        linear-gradient(#000000, #010101) padding-box,
        linear-gradient(264.4deg, #f75bb1 -6.74%, #c392dc 43.26%, #008782 103.97%) border-box;
`

export const CustomLine = styled.div`
    width: 48%;
    height: 0.0625rem;
    background: #F1B0EA;
`;

export const LetterContainer = styled.div`
    width: 2.5rem;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CustomButton = styled.button`
    display: flex;
    height: 3rem;
    padding: 0.75rem 1.125rem;
    justify-content: center;
    align-items: center;
    gap: 1.25rem;
    border-radius: 0.5rem;
    border: 1px solid transparent;
    background:
        linear-gradient(#430f41, #430f41) padding-box,
        linear-gradient(264.4deg, #f75bb1 -6.74%, #c392dc 43.26%, #008782 103.97%) border-box;
`;

export const Rect = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    flex-shrink: 0;
    background: linear-gradient(-90deg, rgba(247, 91, 177, 0.00) 1.04%, rgba(195, 146, 220, 0.03) 45.73%, rgba(0, 135, 130, 0.15) 100%);
    z-index: -1;
`

export const Rect1 = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    /* transform: rotate(180deg); */
    flex-shrink: 0;background: 
    linear-gradient(90deg, rgba(247, 91, 177, 0.00) 1.04%, rgba(195, 146, 220, 0.03) 45.73%, rgba(0, 135, 130, 0.15) 100%);
    z-index: -1;
    background-size: cover;
`