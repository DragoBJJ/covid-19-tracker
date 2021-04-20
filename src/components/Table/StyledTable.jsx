import styled from "styled-components";

export const StyledTable = styled.div `
margin-top: 20px;
overflow: scroll;
height: 400px;
color: #1d1d1d;


tr {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
}

strong {
color: #cc1034;

}


tr:nth-of-type(odd) {
 background-color: #f3f2f8;
}
`