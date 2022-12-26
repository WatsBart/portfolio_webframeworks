import React from 'react'
export const themes = {
    dark: {
        title: {
            color:"lightgray"
        },
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
            width: "100%",
        },
        labolist: {
            margin: "0",
            padding: "2em",
            fontSize: "2em"
        },
        answer: {
          padding: "1em"  
        },
        rightAnswer: {
            backgroundColor: "#004c1d",
            color: "lightgray",
            padding: ".5em"
        },
        wrongAnswer: {
            backgroundColor: "#a0000a",
            color: "lightgray",
            padding: ".5em"
        },
    },
    light: {
        title: {
            color: "black"
        },
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
            width: "100%",
        },
        labolist: {
            margin: "0",
            padding: "2em",
            fontSize: "2em"
        },
        answer: {
          padding: "1em"  
        },
        rightAnswer: {
            backgroundColor: "green",
            color: "black",
            padding: ".5em"
        },
        wrongAnswer: {
            backgroundColor: "red",
            color: "black",
            padding: ".5em"
        },
    }
}

const ThemeContext = React.createContext(themes.dark)
export default ThemeContext