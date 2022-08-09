import styled from "styled-components";

export const TopBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: .5rem;
    color: purple;
    position: sticky;
    max-width: 100vw;
    top: 0;
    right: 0;
    left: 0;
    box-shadow: 7px 6px 10px -10px rgba(0,0,0,0.92);
    -webkit-box-shadow: 7px 6px 10px -10px rgba(0,0,0,0.92);
    -moz-box-shadow: 7px 6px 10px -10px rgba(0,0,0,0.92);

`
export const Left = styled.div`
    display: flex;
`
export const Right = styled.div`
    display: flex;
    div{
            position: relative;
            cursor: pointer;
            margin: .2rem;

        span{
    position: absolute;
    top: -5px;
    right: 5px;
    color: white;
    align-items: center;
    text-align: center;
    justify-content: center;
    background-color: red;
    font-size: .6rem;
    width: 15px;
    height: 15px;
    border-radius: 20px;

        }
    }
`