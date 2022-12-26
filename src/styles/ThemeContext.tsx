import React from 'react'
export const themes = {
    dark: {
        content:{
            backgroundColor: "darkslategray",
            color: "lightgray"
        },
        links: {
            color: 'lightgreen'
        },
        nav: {
            backgroundColor: "#002b14",
            display: "flex",
            justifyContent: "space-evenly"
        },
        navLink: {
            color: "red"
        },
        activeNavLink: {
            color: "blue"
        },
        footer: {
            backgroundColor: "#002b14",
            width: "100vw",
        }
    },
    light: {
        content: {
            backgroundColor: "lightgray",
            color: "black"
        },
        links: {
            color: 'blue'
        },
        nav: {
            backgroundColor: "lightcoral",
            display: "flex",
            justifyContent: "space-evenly"
        },
        navLink: {
            color: "red"
        },
        activeNavLink: {
            color: "darkblue"
        },
        footer: {
            backgroundColor: "lightcoral",
            width: "100vw",
        }
    }
}

const ThemeContext = React.createContext(themes.dark)
export default ThemeContext