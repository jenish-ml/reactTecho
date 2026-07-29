import { createContext } from "react";

const Theme = {
    light : "light",
    dark : "dark"
}

export const ThemeContext = createContext(Theme);
