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


    useEffect(() => {
        const fetchData = async () => {
            const url = await fetch(`${api}/${id}`);
            const response = await url.json();
            setPokemon(response);
            setImage(response.sprites.other.dream_world.front_default);
            setMoves(response.moves);
            setAbilityUrl(response.abilities)
            setTypes(response.types)
        }

        fetchData()
    }, [id])

    useEffect(() => {
        const ability = async () => {
            const promise = abilityUrl.map(res => res.ability.url)
            const response = await axios.all(promise.map(res => axios.get(res)))
            const data = response.map(res => res.data)

            setAbilities(data);

        }

        ability()
    }, [abilityUrl])

    return (
     <>
     
     <Pokemon  pokemon={pokemon} image={image} moves={moves} abilities={abilities} types={types} />

    </>
    )
}




