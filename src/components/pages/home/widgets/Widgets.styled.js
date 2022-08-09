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
            li{
                img{
                    width: 20px;
                    min-height: 20px;
                    border-radius: 25%;
                }
            }
        }
   
`
export const LargeWidgets = styled.div`
    min-width: 69%;
    padding: .3rem;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

   
    box-shadow: -1px 1px 5px 5px rgba(0,0,0,0.12);
        -webkit-box-shadow: 1px 1px 5px 5px rgba(0,0,0,0.12);
        -moz-box-shadow: -1px 1px 5px 5px rgba(0,0,0,0.12);
`