import { api } from "../api/api";
import { useParams } from "react-router-dom";
import {  useEffect, useState } from "react";
import axios from "axios";
import { Pokemon } from "../components/pokemon/pokemon";



export const Profile = () => {

    const { id } = useParams();
    const [ pokemon , setPokemon ] = useState([]);
    const [ image, setImage ] = useState('');
    const [ moves, setMoves ] = useState([]);
    const [ abilities, setAbilities] = useState([]);
    const [ abilityUrl, setAbilityUrl] = useState([]);
    const [ types, setTypes ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            const url = await fetch(`${api}/${id}`);
            const response = await url.json();
            setPokemon(response);
            setImage(response.sprites.other.dream_world.front_default);

            setMoves(response.moves);
            setAbilityUrl(response.abilities)
            
            setIsLoading(false);
            
            setTypes(response.types)
        }

        fetchData()
    }, [id])

    useEffect(() => {
        const ability = async () => {
            setIsLoading(true)

            const promise = abilityUrl.map(res => res.ability.url)
            const response = await axios.all(promise.map(res => axios.get(res)))
            const data = response.map(res => res.data)
            setIsLoading(false)

            setAbilities(data);

        }

        ability()
    }, [abilityUrl])

    return (
     <>
     
     <Pokemon  pokemon={pokemon} image={image} moves={moves} abilities={abilities} types={types} isLoading={isLoading}/>

    </>
    )
}




