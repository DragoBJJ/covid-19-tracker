import styled from "styled-components";

export const StyledContainer = styled.div``;

export const StyledName = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #555;
`;

export const StyledFlag = styled.div`
  height: 80px;
  border-radius: 5px;
  background-image: ${({ image }) => `
url(${image})
`};
  background-size: cover;
`;

export const StyledInfo = styled.div`
  font-size: 16px;
  margin-top: 5px;
`;
