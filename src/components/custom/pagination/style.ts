import styled from "styled-components";

export const CustomFont = styled.div`
  font-family: "Aeonik";
  color: #8d8e8d;
`;

export const PageStep = styled.div`
  display: flex;
  padding: 10px 14px;
  align-items: center;
  border-radius: 16px;
  border: 1px solid #e7e8e7;
`;

export const PaginationWrapper = styled.div`
  padding: 0 35px 128px;
`;

export const StepButton = styled.button<{
  isActive?: boolean;
  padding?: string;
}>`
  border-radius: 9.919px;
  ${({ padding }) => (padding ? `padding: ${padding};` : `padding: 8px;`)}
  ${({ isActive }) =>
    isActive ? `background: #D100BC;` : `background: #2B2B2B;`}
`;
