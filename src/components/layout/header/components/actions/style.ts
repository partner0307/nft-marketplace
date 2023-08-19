import { GV } from "@/utils/style.util";
import styled from "styled-components";

export const ActionContainer = styled.div`
  display: flex;
  padding-right: 0px;
  justify-content: center;
  padding: 0 32px;
  gap: 20px;
`;

export const Content = styled.span`
  font-family: ${GV("font3")};
  white-space: nowrap;
`;
