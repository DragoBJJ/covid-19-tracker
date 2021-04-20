import styled from "styled-components";
import {
  Map,
  TileLayer
} from "react-leaflet"

export const StyledContainer = styled.div `
  height: 500px;
  background-color: #fff;
  padding: 1rem;
  border-radius: 20px;
  margin-top: 16px;
  box-shadow: 0 0 8px -4px rgba(0, 0, 0, 0.5);
`;

export const StyledMapContainer = styled(Map)
`
  height: 100%;
`;