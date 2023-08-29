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
    font-size: 0.75rem;
    font-weight: 600;
    margin-left: -0.9375rem;
`;

export const StepContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`

export const StepNumberContainer = styled.div<{ step?: number }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6rem;
    height: 6rem;
    border-radius: 0.5rem;
    ${({ step }) => step === 1 ? `border: 1px dashed #8DD3ED;` : step === 2 ? `border: 1px dashed #EA8AE0;` : `border: 1px dashed #E48EA8;`}
    &::after {
        position: absolute;
        left: 50%;
        bottom: -100%;
        width: 0.0625rem;
        height: 100%;
        background: #8DD3ED;
    }
`;

export const StepNumber = styled.div<{ step?: number }>`
    width: 4rem;
    height: 4rem;
    font-size: 2rem;
    font-weight: 700;
    border-radius: 0.5rem;
    ${({ step }) => step === 1 ? `background: #0792C5;` : step === 2 ? `background: #BE00AB;` : `background: #B2083B;`}
`