import styled from "styled-components"



const Container = styled.div `
    max-width: 600px;  
    height: 600px;
    display: flex;
    background: #E5DDD5;
    margin: 0 auto;
    border: 1px solid black; 
    align-items: flex-end;
     
` 
const Formulario = styled.form`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 1.1rem .8rem;
    width: 50px;
    max-height: 6rem;
    
    > * {
        background: white;
        font-size: 1rem;
        width: 80px;
        height: 50px;
        margin: 4px;
        border-radius: 10px;
        border: none;
    }
    
    > input:nth-child(1) {
        flex: 14;
        padding-left: .5rem;
    }

    > input:nth-child(2) {
        flex: 69;
        padding-left: .7rem;

        > button {
        background: #F0F0F0;
        flex: 13;
        font-weight: bold;
        cursor: pointer;
      }
    }

`

export {Container, Formulario}