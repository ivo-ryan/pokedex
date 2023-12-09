import { createContext, useState } from "react";

export const themes = {
    light:{
        background: 'white',
        color: 'black',
        headerBackgroud: '#5487b6',
        cardBackground: '#a094f9',
        divBackground: '#d6d1fe',
        buttonBackground: 'white',
        typeBackground: 'white',
        sectionBackground: '#a094f9'
    },

    dark:{
        background: 'black',
        color: 'white',
        headerBackgroud: '#282f58',
        cardBackground: '#4b35f4',
        divBackground: '#130f29 ',
        buttonBackground: 'black',
        typeBackground: '',
        sectionBackground: 'rgb(21, 26, 55)'
    }
};

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const [ theme, setTheme ] = useState(themes.light); 

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children }
        </ThemeContext.Provider>
    )
};