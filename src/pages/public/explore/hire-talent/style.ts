import { GV } from '@/utils/style.util';
import styled from 'styled-components';

export const AvatarContainer = styled.img<{ isFirst?: boolean }>`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 62.5rem;
    border: 1px solid #F2F1F1;
    ${({ isFirst }) => isFirst ? `` : `margin-left: -0.9375rem;`}
`;

export const TalentCounter = styled.div`
    display: flex;
    padding: 0rem 0.75rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: 62.5rem;
    border: 1px solid #C392DC;
    background: #241A20;
    box-shadow: -9px 4px 4px 0px rgba(0, 0, 0, 0.15);
    font-size: ${GV('font-size-6')};
    font-weight: 600;
    margin-left: -0.9375rem;
`;

export const Steps = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`;

export const StepContainer = styled.div`
    display: flex;
    width: 100%;
    height: 18.9375rem;
`

export const StepNumberContainer = styled.div<{ step?: number }>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6rem;
    height: 6rem;
    border-radius: 0.5rem;
    ${({ step }) => step === 1 ? `border: 1px dashed #8DD3ED;` : step === 2 ? `border: 1px dashed #EA8AE0;` : `border: 1px dashed #E48EA8;`}

    &:after {
        position: absolute;
        top: 6rem;
        left: 50%;
        content: '';
        height: 12.9375rem;
        ${({ step }) => step !== 3 ? `border: 0.0625rem dotted #8DD3ED;` : ``}
    }

    &:before {
        position: absolute;
        top: 50%;
        left: 6rem;
        content: '';
        width: 2.6875rem;
        border: 0.0625rem dotted #8DD3ED;
    }
`;

export const StepNumber = styled.div<{ step?: number }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    font-size: ${GV('font-size-2')};
    font-weight: 700;
    border-radius: 0.5rem;
    ${({ step }) => step === 1 ? `background: #0792C5;` : step === 2 ? `background: #BE00AB;` : `background: #B2083B;`}
`;

export const StepContent = styled.div<{ step?: number }>`
    flex: 1;
    display: flex;
    justify-content: space-between;
    width: 59.375rem;
    height: 15.625rem;
    padding: 1.8rem 2.25rem 3rem;
    margin-left: 2.6875rem;
    border-radius: 0.5rem;
    ${({ step }) => step === 1 ? `border: 1px dashed #8DD3ED;` : step === 2 ? `border: 1px dashed #EA8AE0;` : `border: 1px dashed #E48EA8;`}
    background: rgba(25, 25, 25, 0.80);
    backdrop-filter: blur(7.5px);
`;