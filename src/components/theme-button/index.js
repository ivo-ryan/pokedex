import React ,{ useContext } from "react";
import { Sun, Moon } from 'phosphor-react';
import { ThemeContext, themes } from "../../context";
import { ButtonStyle } from "./style";

export const ThemeButton = () => {
    const { theme, setTheme } = useContext(ThemeContext);


    return (
        <ButtonStyle onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>
          {theme === themes.light ? 
           <Sun className="icon"/> :
           <Moon className="icon"/>  
        }
        </ButtonStyle>
    )
}