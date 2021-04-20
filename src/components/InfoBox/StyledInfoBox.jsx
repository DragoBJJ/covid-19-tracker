import styled, { css } from "styled-components";
import { Card } from "@material-ui/core";

export const StyledCard = styled(Card)`
  flex: 1;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border-bottom: ${({ active, isRed }) =>
    active && isRed && "5px solid #cc1034"};
  border-bottom: ${({ active, isRed }) =>
    active && !isRed && "5px solid #90EE90"};
  border-bottom: ${({ active, isDeath }) =>
    active && isDeath && "5px solid #1d1d1d"};

  :hover {
    transform: scale(1.05);
  }
  :not(:last-child) {
    margin-right: 15px;
  }
`;

export const StyledCases = styled.p`
  color: ${({ isRed }) => (!isRed ? "#90EE90" : "#cc1034")};
  color: ${({ isDeath }) => isDeath && "#1d1d1d"};
  font-weight: 600;
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
`;

export const StyledTotal = styled.p`
  color: #6c757d;
  font-size: 1.2rem;
  margin-top: 15px;
`;
