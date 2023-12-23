import styled, { createGlobalStyle } from 'styled-components';


const Global = createGlobalStyle`
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body{
            font-family: 'Poppins', sans-serif;
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

const Li = styled.li`
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-direction: column;
            border-radius: 10px;
            padding: 10px;
            height: 200px;
            width: 250px;
            outline: none;
            z-index: 1;
            position: relative;
           
            transition: 0.3s ease-in;
            
            &:before{
                content: '';
                background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
                position: absolute;
                top: -2px;
                left: -2px;
                background-size: 400%;
                z-index: -1;
                filter: blur(5px);
                width: calc(100% + 4px);
                height: calc(100% + 4px);
                animation: glowing 20s linear infinite;
                opacity: 0;
                transition: opacity .3s ease-in-out;
                border-radius: 10px;
    
    
            }
    
            &:active{
                color: #000;
                font-weigth: bold;
            }
    
            &:active&:after{
                background: transparent;
            }
    
            &:hover&:before{
                opacity:1;
            }
    
            &:after{
                z-index: -1;
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                background:${props => props.theme.cardBackground} ;
                left: 0;
                top: 0;
                border-radius: 10px;
            }
            @keyframes glowing {
                0% { background-position: 0 0; }
                50% { background-position: 400% 0; }
                100% { background-position: 0 0; }
            }

            
            p{
                display:flex;
                width: 100%;
            }
            

            &:hover {
                img{
                    transition: 0.3s ease-in;
                    opacity: 100%;
                    transform: scale(1.25);

                }

            }

            
            img{
                height: 80px;
                opacity: 60%;
                transition: 0.3s ease-out;
                z-index: 1;
                filter: drop-shadow( 6px 4px 3px #232323);
        
            }       
`;

const Type = styled.p`
            transition: 0.3s ease-in;
            color: ${props => props.theme.color} ;
            background: ${e => e.theme.typeBackground};
            font-weight: 500;
            border: 1px solid black;
            padding: 0 10px;
            border-radius: 8px;
`

const Name = styled.p`
            transition: 0.3s ease-in;
            justify-content: center;
            font-weight: 700;
            color: ${props => props.theme.color};
`

const ID = styled.p`
            justify-content: end;
            font-size: 19px;
            font-weight: 700;
            color:rgb(247, 186, 21);
`







export { Ul, Li, ID, Name, Global, Type};

