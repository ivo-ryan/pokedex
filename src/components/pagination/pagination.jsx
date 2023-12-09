import React, { useContext } from 'react';
import { Button } from './style';
import pokeball from '../../assets/pokeball.png';
import { ThemeContext } from '../../context';

export const Pagination = ({ limit, setLimit }) => {
    const { theme } = useContext(ThemeContext);

    const handleClick = () => {
        setLimit(limit + 10 )
       
    }

    return (
            <Button theme={theme} onClick={handleClick}><img src={pokeball} alt='Carregar mais...' /> View more </Button>

    )
};



