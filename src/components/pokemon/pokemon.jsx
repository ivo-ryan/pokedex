import { useContext } from "react";
import { NavBar } from "../navbar/navbar";
import { About, Container, Id, ImageContainer, MoveDescription, Moves, ProfileName, Scroll, Section, TypeContainer, Types, TypesName } from "./style";
import { ThemeContext } from "../../context";



export const Pokemon = ({ pokemon, image, moves, abilities , types }) => {   
    
    const { theme } = useContext(ThemeContext);

    return (
        
        <>
        
        <NavBar hideSearch />

        <Section theme={theme}>
            
            <Container>

            <Id>#{pokemon.id}</Id>

            <ProfileName theme={theme}>{pokemon.name}</ProfileName>

            <ImageContainer>
                <img src={image} alt=" Imagem do Pokemon" />
            </ImageContainer>


            <About>
                  <TypeContainer>

                  <TypesName theme={theme}>Type :</TypesName>

                   <Types>
                       {types.map((type, index) => {
                           return (
                               <li key={index}>
                                  {type.type.name}
                               </li>
                           )
                       })}
                   </Types>

                </TypeContainer> 

                    <div>

                   <MoveDescription>Movements :</MoveDescription>

                   <Moves>
                    {
                       moves.map((data, index) => {
                           return (
                               <li key={index}>{data.move.name}</li>
                           )
                       })
                   }</Moves>

                   </div>

               </About>

            <h3>Abilities :</h3>

                <Scroll theme={theme}>
                    {
                        abilities.map((ability, index) => {
                            return(
                                <li key={index}>
                                    <h4>
                                        {ability.name}
                                    </h4>

                                    <p>
                                        { ability.effect_entries[1].effect}
                                    </p>
                                </li>
                            )
                        })
                    }
                </Scroll>

            </Container>

        </Section>
        
        </>
    )
    
}
