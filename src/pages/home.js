import React, { useContext } from "react";
import { Pagination } from "../components/pagination/pagination";
import { useState, useEffect } from "react";
import axios from 'axios';
import { api } from "../api/api";
import { ThemeContext } from "../context";
import { NavBar } from "../components/navbar/navbar";
import { Details } from "../components/pokemons/pokemons";
import { Div, Ul } from "./style";


export const Home = (  ) => {

    const [ list , setList] = useState([]);
    const [ limit , setLimit ] = useState(10);
    const [ search, setSearch ] = useState("");
    const { theme } = useContext(ThemeContext);
    
   useEffect(() => {
    
    const pokemons = async () => {
        const url = await fetch( `${api}?limit=${limit }`);
        const response = await url.json();
        const promise = response.results;
        const promises = [...promise];
        const details = promises.map( res => res.url);
        const promisesData = await axios.all(details.map(endpoint => axios.get(endpoint)));
        const data = promisesData.map(res => res.data);
      
        setList(data)
    } 
     pokemons()
   },[limit]);

    const searchLowerCase = search.toLowerCase()

    const pokemonSearch = list.filter(e => 
        e.name.toLowerCase().includes(searchLowerCase)) ;

   return(
    <Div theme={theme}>

        < NavBar search={search} setSearch={setSearch} cancelNavigation/>

        <Ul theme={theme}>
        {
            pokemonSearch.map(({ name, id, types, sprites }, index) => (
                <Details
                  key={index}
                  id={id}
                  name={name}
                  type={types[0]?.type?.name}
                  type2={types[1]?.type?.name}
                  img={sprites?.other?.dream_world?.front_default}
                />
              ))}
            </Ul>
              
            <Pagination 
            limit={limit}
            setLimit={setLimit}/>
    </Div>
    )
}
