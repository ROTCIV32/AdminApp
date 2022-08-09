import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 2rem .5rem;

`


export const Features  = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    div{
        padding: .3rem;
        box-shadow: -1px 1px 5px 5px rgba(0,0,0,0.12);
        -webkit-box-shadow: 1px 1px 5px 5px rgba(0,0,0,0.12);
        -moz-box-shadow: -1px 1px 5px 5px rgba(0,0,0,0.12);

        h5{
            color: purple;
        }
    }
`


