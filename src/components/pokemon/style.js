import styled from "styled-components";

const Section = styled.main`
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap : 20px;
            transition: 0.3s ease-in;
            background: ${props => props.theme.sectionBackground};

            h4{
                color: rgb(28, 198, 62);
                font-family: 'Poppins', sans-serif;
            }

            ul{

                 font-weight: 500;
     
                &::-webkit-scrollbar {
                    width: 12px;
                  }
                
                  &::-webkit-scrollbar-track {
                    background: #1f75cc2f;
                  }
                
                  &::-webkit-scrollbar-thumb {
                    background: rgb(28, 198, 62);
                    height: 30px;
                    border-radius: 50px;
                  }

            }

            
`;
const ProfileName = styled.p`
                    display: flex;
                    justify-content: flex-start;
                    width: 60%;
                    color: white;
                    font-weight: 700;
                    font-size: 30px;
`;

const Scroll = styled.ul`
                    display: block;
                    margin: 10px 0;
                    padding: 10px;
                    width: 70%;
                    color: white;
                    text-align: center;
                    height: 90px;
                    list-style: none;
                    overflow: hidden scroll;


`;
const Container = styled.div`
                display: flex;
                align-items: center;
                flex-direction: column;
                border-radius: 10px;
                background-color: rgb(44, 55, 119);
                max-width: 600px;
                margin: 30px 10px;
                filter: drop-shadow(2px 8px 7px black);

                h3{
                    color:rgb(247, 186, 21);
                }

`;

const ImageContainer = styled.div`
                display: flex;
                justify-content: center;   
                
                
            
            img{
              width: 100%;
              z-index: 1;
              filter: drop-shadow(15px 15px 4px #232323);

              @media (max-width: 425px) {
                width: 70%;
              }
          }
          
`

const About = styled.div`
                display: flex;
                align-items : flex-start;
                width: 70%;
                justify-content: space-between;
                gap: 20px;
                margin: 30px 0;


                @media (max-width: 425px){
                  flex-direction: column;
                  align-items: center; 

                } 

`;

const Moves = styled.ul`
                    display: block;
                    padding: 10px 0;
                    color: white;
                    width: 140px;
                    text-align: center;
                    height: 100px;
                    list-style: none;
                    overflow: hidden scroll;

`;

const MoveDescription = styled.h3`
                    padding-bottom: 10px;
                    color:rgb(247, 186, 21);
`

const Types = styled.ul`
                display: flex;
                min-width: 150px;
                list-style: none;
                gap: 10px;

                li{
                    padding: 2px 10px ;
                    border-radius: 10px;
                    color: white;
                    background: linear-gradient(rgb(21, 26, 55) 0%, rgba(21, 26, 55, 0) 100%);
                }

           
`;

const TypesName = styled.p`
                    display: flex;
                    font-weight: 700;
                    align-items: center;
                    color:rgb(247, 186, 21);
`;

const TypeContainer = styled.div`
                display: flex;
                gap: 10px;
                justify-content: center;

`;

const Id = styled.p`
                display: flex;
                justify-content: flex-start;
                padding-top: 30px;
                width: 60%;
                font-size: 30px;
                font-weight: 700;
                color:rgb(247, 186, 21);

`;

export { Section, Scroll, ProfileName, Types, TypesName, Id, TypeContainer, Container, MoveDescription, Moves, About, ImageContainer }