import styled from "styled-components";

const Button = styled.button`
        margin-top:10px;
        border-radius: 10px;
        padding: 5px 10px ;
        border: none;
        font-family: 'Poppins', sans-serif;
        min-width: 150px;
        font-size: 16px;
        font-weight: 700;
        outline: none;
        color:${props => props.theme.color};
        background-color: #111;
        position:relative;
        z-index:0;
        transition: 0.2s ease-out;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;


        &:before{
            content:'';
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
            color:#000;
        }

        &:active&:after {
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
            background: ${props => props.theme.buttonBackground};
            left: 0;
            top: 0;
            border-radius: 10px;
        }
        @keyframes glowing {
            0% { background-position: 0 0; }
            50% { background-position: 400% 0; }
            100% { background-position: 0 0; }
        }

        img{
            width: 35px ;
            padding-right: 5px;
            
        }
`

export { Button }

