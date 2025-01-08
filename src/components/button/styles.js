import styled from "styled-components";

export const ButtonContainer = styled.button`
    padding: 15px;
    border: 1px solid rgb(131, 131, 131);
    background-color: rgb(79, 79, 79);
    color: #fff;
    cursor: pointer;
    font-size: 25px;
    flex: 1;

    &:hover {
        opacity: 0.8;
        transition: 0.5s;
    }
`