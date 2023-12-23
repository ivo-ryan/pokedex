import styled from 'styled-components';

const Header = styled.header`
        background: ${props => props.theme.headerBackgroud};
        text-align:center;
        padding-bottom: 20px;
        width:100%;
        transition: 0.3s ease-in;
        filter: drop-shadow(3px 3px 10px black);

        div{
            display: flex;
            align-items: center;
            padding: 10px;
            justify-content: space-between;

            img{
                width:130px ;
                transition: 0.3s ease-in;
                filter: drop-shadow(3px 3px 10px black);
            }
        }

        input{
            font-family: 'Poppins', sans-serif;
            padding: 4px 3px;
            outline: none;
            border: none;
            border-radius: 5px;
            transition: 0.3s ease-in;

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