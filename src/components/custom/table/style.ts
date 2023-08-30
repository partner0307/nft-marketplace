import { GV } from '@/utils/style.util';
import styled from 'styled-components';

export const StyledTh = styled.div<{ $width?: string }>`
  flex: ${({ $width }) => ($width ? `1 1 ${$width}px` : `1 1 100%`)};
  display: flex;
  align-items: center;
  text-transform: uppercase;
  ${({ $width }) => ($width ? `width: ${$width};` : ``)}
  padding: 1rem 1.5rem;
  font-size: ${GV('font-size-5')};
  color: ${GV('info')};
`;

export const StyledTd = styled.div<{ $align?: string; $width?: string }>`
  flex: ${({ $width }) => ($width ? `1 1 ${$width}px` : `1 1 100%`)};
  display: flex;
  ${({ $align }) => ($align ? `align-items: ${$align};` : ``)}
  ${({ $width }) => ($width ? `width: ${$width};` : ``)}
  padding: 1rem 1.5rem;
`;

// export const StyledTr = styled.div`
//   display: flex;
//   gap: 1rem;
//   padding: 1rem 1.5rem;
//   background: #191919;
//   height: 4.5rem;
// `;

export const StyledTable = styled.div<{ $gct: string[] }>`
  display: grid;
  grid-template-columns: ${({ $gct }) => $gct.join(' ')};
  grid-row-gap: 0.25rem;
  background: #0D0D0D;

  ${({ $gct }) => `
    ${$gct
      .map(
        (i, k) =>
          (k === 0 ? `` : `,`) + `\n>div:nth-child(${$gct.length * 2}n + ${k + 1})`
      )
      .join('')} {
      background: #191919;
    }
  `}
  ${({ $gct }) => `
    ${$gct
      .map(
        (i, k) =>
          (k === 0 ? `` : `,`) + `\n>div:nth-child(${$gct.length * 2}n - ${k})`
      )
      .join('')} {
      background: #131313;
    }
  `}
`;

export const TableContainer = styled.div`
  width: 100%;
  border-radius: ${GV('radius-md')};
  overflow: hidden;
`;
