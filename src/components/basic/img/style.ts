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
  height: ${({ h }) => (h ? h : `fit-content`)};
  max-width: 100%;
  overflow: hidden;
  width: ${({ w }) => w ?? `100%`};
  height: ${({ h }) => h ?? `auto`};
`;

export const StyledImage = styled.img`
  width: 100%;
  min-height: fit-content;
  min-width: fit-content;
`;
