import styled from 'styled-components';

const Header = styled.header`
        background: ${props => props.theme.headerBackgroud};
        text-align:center;
        padding-bottom: 20px;
        width:100%;

        div{
            display: flex;
            align-items: center;
            padding: 10px;
            justify-content: space-between;

            img{
                width:130px ;
                transition: 0.3s ease-in;
            }
        }

        input{
            font-family: 'Poppins', sans-serif;
            padding: 4px 3px;
            border-style: none;
            border-radius: 5px;
            transition: 0.3s ease-in;

            &:hover{
                box-shadow: 5px -1px 40px #6d4ff3;
            }
        }

        
`;

const Img = styled.img`
        outline: none;
        &:hover{
            transform: scale(1.08);
            filter: drop-shadow(3px 3px 10px white);
        }

        
`;



export { Header, Img }