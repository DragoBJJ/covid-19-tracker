import styled from "styled-components";
import {
  Card,
  CardContent
} from "@material-ui/core"

import LineGraph from "./components/LineGraph/LineGraph";


export const StyledApp = styled.div `
display: flex;
justify-content: space-evenly;
@media(max-width: 990px) {
flex-direction: column;

}

`

export const StyledHeader = styled.h1 `
color: #cc1034;
`


export const StyledLeftColumn = styled.div `
flex:  0.8;

`

export const StyledRightColumn = styled(Card)
`
`

export const StyledCardContent = styled(CardContent)
`
`

export const StyledLineGraph = styled(LineGraph)
`
`

export const StyledTitle = styled.p `
margin: 30px 0;
font-size: 1.1rem;

`

export const StyledAppHeader = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const StyledAppStats = styled.div `
display: flex;
justify-content: space-between;
`