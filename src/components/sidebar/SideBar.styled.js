import styled from "styled-components";

export const SideBarContainer = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    top:60px;
    z-index: 100;
    padding: .2rem .5rem;
    justify-content: left;
    align-items: center;
    max-height: 92vh;
    max-width: 30%;
    background-color: #f1f1f1;
    overflow: scroll;
    box-shadow: 7px 6px 10px -10px rgba(0,0,0,0.92);
    -webkit-box-shadow: 7px 6px 10px -10px rgba(0,0,0,0.92);
    -moz-box-shadow: 7px 6px 10px -10px rgba(0,0,0,0.92);

    div{
       display: flex;
       flex-direction: column;
        margin-bottom: 0;
        padding-bottom: 0;
      
    }

`