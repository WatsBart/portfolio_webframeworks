import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
import { ColorSelect } from './components/labo4/color-select/ColorSelect';
import { CounterList } from './components/labo4/counter-list/CounterList';
import { Filtering } from './components/labo4/filtering/Filtering';
import Labo4Root from './components/labo4/Labo4Root';
import { ShoppingList } from './components/labo4/shoppinglist/ShoppingList';
import { SlotMachine } from './components/labo4/slotmachine/SlotMachine';
import { TicTacToe } from './components/labo4/tictactoe/TicTacToe';
import { Labo5Interval } from './components/labo5/interval/Interval';
import Labo5Root from './components/labo5/Labo5Root';
import { Labo5LocalStorage } from './components/labo5/localstorage/Localstorage';
import { Labo5Pokemon } from './components/labo5/pokemon/Pokemon';
import Labo6Root from './components/labo6/Labo6Root';
import Labo6Quiz from './components/labo6/quizapp/Labo6Quiz';
import Labo6Todo from './components/labo6/todo/Labo6Todo';
import { Labo7PageNotFound } from './components/labo7/PageNotFound';
import { Pokemon } from './components/labo7/Pokemon';
import { PokemonDetail } from './components/labo7/PokemonDetail';
import { PokemonHome } from './components/labo7/PokemonHome';
import { PokemonRoot } from './components/labo7/PokemonRoot';
import { Labos } from './components/Labos';
import { PageNotFound } from './components/PageNotFound';
import { Root } from './components/Root';

const link = "https://pokeapi.co/api/v2/pokemon?limit=500";
const emptyData = {count:0,next:"",previous:"",results:[]};

export const PokeContext = React.createContext<data>(emptyData);

interface data {
  count: number,
  next: string,
  previous: string,
  results: { name: string, url: string }[]
}

const App = () => {
  let labos = ["labo4","labo5","labo6","labo7"]
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "/labos",
          element: <Labos labos={labos}/>
        },
        {
          path: "labo7/",
          element: <PokemonRoot />,
          children: [
            {
              path: "",
              element: <PokemonHome />
            },
            {
              path: "pokemon",
              element: <Pokemon />
            },
            {
              path: "pokemon/:id",
              element: <PokemonDetail BackLink='/labo7/pokemon'/>
            },
            {
              path: "labo7/*",
              element: <Labo7PageNotFound />
            }
          ]
        },
        {
          path: "labo6/",
          element: <Labo6Root />,
          children: [
            {
              path: "quizapp",
              element: <Labo6Quiz />
            },
            {
              path: "todo",
              element: <Labo6Todo />
            }
          ]
        },
        {
          path: "labo5/",
          element: <Labo5Root />,
          children: [
            {
              path: "interval",
              element: <Labo5Interval />
            },
            {
              path: "localstorage",
              element: <Labo5LocalStorage />
            },
            {
              path: "pokemon",
              element: <Labo5Pokemon />
            }
          ]
        },
        {
          path: "labo4/",
          element: <Labo4Root />,
          children: [
            {
              path: "colorselect",
              element: <ColorSelect />
            },
            {
              path: "counterlist",
              element: <CounterList />
            },
            {
              path: "filtering",
              element: <Filtering />
            },
            {
              path: "shoppinglist",
              element: <ShoppingList />
            },
            {
              path: "slotmachine",
              element: <SlotMachine />
            },
            {
              path: "tictactoe",
              element: <TicTacToe />
            }
          ]
        },
        {
          path: "contact",
          element: <Contact />
        },
        {
          path: "*",
          element: <PageNotFound />
        }
      ]
    }
  ]);

  const [apiData, setData] = useState<data>(emptyData);

  useEffect(() => {
    const fetchFunction = async () => {
      let result = await fetch(link);
      let json: data = await result.json();
      setData(json);
    }
    fetchFunction();
  }, []);

  return (
    <PokeContext.Provider value={apiData}>
      <div>
        <RouterProvider router={router} />
      </div>
    </PokeContext.Provider>
    
  )
}

export default App;  
