import styled from 'styled-components';

export const NewsCardContainer = styled.div<{ width?: string }>`
    ${({ width }) => width ? `width: ${width};` : `width: 392px;`}
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 18px 18px 36px;
    border-radius: 18px;
    border: 1px solid #222;
    background: var(--foundation-grey-grey-700, #1E1E20);
`;

export const NewsImage = styled.img`
    width: 100%;
    height: 226px;
    border-radius: 18px;
`