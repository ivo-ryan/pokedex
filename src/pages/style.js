import styled from "styled-components";

const Div = styled.div`
            display: flex;
            flex-direction: column;
            background: ${props => props.theme.divBackground};
            background-attachment: fixed;
            min-height:100vh;
            align-items: center;
            
            a{
                text-decoration:none;
            }
          
`

const Ul = styled.ul`
            display: flex;
            max-width: 1500px;
            flex-wrap: wrap; 
            list-style: none;
            justify-content: center;
            align-items: center;
            padding: 10px;
            gap: 10px;
            

`

export { Div, Ul }