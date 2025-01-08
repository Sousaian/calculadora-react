import styled from "styled-components";

export const Container = styled.div`
    width: 100;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`
    width: 80%;
    min-width: 300px;
    background-color:rgb(79, 79, 79); 
    color: #fff;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`