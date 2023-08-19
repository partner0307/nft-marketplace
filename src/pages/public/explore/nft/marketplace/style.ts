import { GV } from "@/utils/style.util";
import styled from "styled-components";

export const ItemContainer = styled.div`
  height: 2.5rem;
  padding: 0 1rem;
  max-width: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  font-size: ${GV('font-size')};
  border: 1px solid #2b2928;
  cursor: pointer;
  background: #191919;
  border-radius: 12px;
`;