import React, { useContext }  from "react";
import { Header, Img } from "./style";
import logoPokemon from '../../assets/logo.png'
import { Link } from "react-router-dom";
import { ThemeButton } from "../theme-button";
import { ThemeContext } from "../../context";



export const NavBar = ({  search , setSearch, hideSearch, cancelNavigation }) => {
       
    const { theme } = useContext(ThemeContext);

    return (

        <Header theme={theme} >
            <div>
            { !cancelNavigation ? (<Link to={"/"}>  <Img src={logoPokemon}  alt="logo Pokemon"/></Link>):
            <img src={logoPokemon}  alt="logo Pokemon"/> 
             }
             
             <ThemeButton/>

             </div>
            
            {!hideSearch && (
                <input type="text" onChange={(e) => setSearch(e.target.value) } value={search} placeholder="search pokemon" />
            )}
            
        </Header>
    )
};