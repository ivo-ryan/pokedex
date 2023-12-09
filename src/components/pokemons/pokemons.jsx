import React, { useContext } from 'react';
import { ID, Li, Name, Type, Ul } from './style';
import { ThemeContext } from '../../context';
import { Link } from 'react-router-dom';

export const Details = ({ img, id, name, type, type2, index }) => {

    const { theme } = useContext(ThemeContext);



    return (

        <>

            <Link to={`/profile/${name}`} >

                <Li theme={theme} key={index}>

                    <ID># {id}</ID>

                    <img src={img} alt='Imagem do Pokemon' />

                    <Name theme={theme}>{name}</Name>

                    <Ul>

                        <li>
                            <Type theme={theme} >{type}</Type>
                        </li>
                        <li>
                            {type2 ? (
                                <Type theme={theme} >{type2}</Type>
                            ) : null}
                        </li>

                    </Ul>

                </Li>

            </Link>

        </>
    )
};