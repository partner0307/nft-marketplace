import { GV } from '@/utils/style.util';
import styled from 'styled-components';

export interface CardContainerPropsInterface {
  h?: string;
  bg?: string;
  transform?: string;
  p?: string;
  bcolor?: string;
  bradius?: string;
  gap?: string;
}

export const CardContainer = styled.div<CardContainerPropsInterface>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap ?? `0.25rem`};
  ${({ transform }) => (transform ? `transform: ${transform};` : ``)}
  ${({ h }) => (h ? `height: ${h};` : ``)}
  padding: ${({ p }) => p ?? `0.5rem`};
  border: 1px solid ${({ bcolor }) => bcolor ?? `rgba(198, 224, 255, 0.5)`};
  border-radius: ${({ bradius }) => bradius ?? GV('radius-md')};
`;
