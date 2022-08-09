import styled from "styled-components";

export const SideBarContainer = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    padding: .5rem;
    justify-content: left;
    align-items: center;
    min-height: 100vh;
    min-width: 100%;
    background-color: #f1f1f1;
    box-shadow: 7px 6px 10px -10px rgba(0,0,0,0.92);
    -webkit-box-shadow: 7px 6px 10px -10px rgba(0,0,0,0.92);
    -moz-box-shadow: 7px 6px 10px -10px rgba(0,0,0,0.92);

    ul{
        margin: 0;
        padding: 0;
        li{
            width: 100%;
            :hover{
                background-color: #ffffff;
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
            }
        }
    }

`