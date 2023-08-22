import styled from 'styled-components';

export interface ImagePropsInterface {
  w?: string;
  h?: string;
  bradius?: string;
}

export const ImageContainer = styled.div<ImagePropsInterface>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ w }) => w ?? `100%`};
  max-width: 100%;
  height: ${({ h }) => h ?? `auto`};
  ${({ bradius }) => (bradius ? `border-radius: ${bradius};` : `border-radius: ${bradius};`)}
  overflow: hidden;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
