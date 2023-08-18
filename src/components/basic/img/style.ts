import styled from 'styled-components';

export interface ImagePropsInterface {}

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: fit-content;
`

export const StyledImage = styled.img<ImagePropsInterface>`
    max-width: 100%;
    height: fit-content;
`;
