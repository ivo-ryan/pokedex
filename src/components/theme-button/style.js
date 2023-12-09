import styled from "styled-components";

const ButtonStyle = styled.button`
        width: 30px;
        font-size: 25px;
        cursor: pointer;
        border: none;
        background-color: transparent;
        transition: 0.2s ease-in;

        &:hover {
            border-bottom: 2px solid black;
        }

    -webkit-animation: roll-in-blurred-left 0.65s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
    animation: roll-in-blurred-left 0.65s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;


    @-webkit-keyframes roll-in-blurred-left {
     0% {
      -webkit-transform: translateX(-1000px) rotate(-720deg);
     transform: translateX(-1000px) rotate(-720deg);
    -webkit-filter: blu(50px);
     filter: blur(50px);
      opacity: 0;
    }
    100% {
     -webkit-transform: translateX(0) rotate(0deg);
    transform: translateX(0) rotate(0deg);
    -webkit-filter: blur(0);
    filter: blur(0);
     opacity: 1;
            }
          }
     @keyframes roll-in-blurred-left {
      0% {
     -webkit-transform: translateX(-1000px) rotate(-720deg);
     transform: translateX(-1000px) rotate(-720deg);
     -webkit-filter: blur(50px);
    filter: blur(50px);
     opacity: 0;
     }
     100% {
     -webkit-transform: translateX(0) rotate(0deg);
    transform: translateX(0) rotate(0deg);
    -webkit-filter: blur(0);
    filter: blur(0);
    opacity: 1;
            }
          }
            
            .icon{
                color: lightsalmon ;
            }
`

export { ButtonStyle }