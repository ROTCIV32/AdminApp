import styled from "styled-components";
export const WidgethsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const SmallWidgets = styled.div`
    min-width: 29%; 
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    padding: .3rem;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
     box-shadow: -1px 1px 5px 5px rgba(0,0,0,0.12);
        -webkit-box-shadow: 1px 1px 5px 5px rgba(0,0,0,0.12);
        -moz-box-shadow: -1px 1px 5px 5px rgba(0,0,0,0.12);

        ul{
            padding: .2rem;
            margin: 0;
            display: flex;
            flex-direction: column;
            justify-content: left;
            align-items: left;

            li{
                display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
              border: 2px solid gray;
              min-width: 100%;
              margin: .1rem .1rem;
              padding: .1rem .1rem;
                img{
                    width: 20px;
                    min-height: 20px;
                    border-radius: 25%;
                }
                button{
                    border-radius: 5px;
                    border: none;
                    background-color: #eeeef7;
                    color: #555555;
                    cursor: pointer;
                }
        }   }
   
    `
export const LargeWidgets = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    min-width: 69%;
    padding: .3rem;
    min-height: 50vh;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
   
    box-shadow: -1px 1px 5px 5px rgba(0,0,0,0.12);
        -webkit-box-shadow: 1px 1px 5px 5px rgba(0,0,0,0.12);
        -moz-box-shadow: -1px 1px 5px 5px rgba(0,0,0,0.12);

        img{
            width: 30px;
            max-height: 30px;
            border-radius: 5px;

        }

        `

        export const LargeBody = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: left;
        min-width: 100%;
        background-color: aliceblue;
        `