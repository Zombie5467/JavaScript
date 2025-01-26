// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Saludo from "./components/saludo";
import Header from "./components/header";
import Footer from "./components/footer";

// import { Routes, Route } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import MovieList from "./components/movieList";
import MovieDetail from "./components/movieDetail";
import SearchByTitle from "./components/searchByTitle";
import { FavoritesProvider } from "./components/favoritesContext";
import FavoritesList from "./components/favoritesList";
import BasicForm from "./components/BasicForm";
import { Button } from "@mui/material";
import { BasicExample } from "./components/basicDialog";
import { NavBar } from "./components/navBar";
import { GridExample } from "./components/gridPractice";
import { MuiForm } from "./components/muiForm";
import InputId from "./components/inputID";

// Array de películas (puedes reemplazarlo con datos reales o el resultado de un fetch más adelante)
const movies = [
  {
    id: "1",
    title: "Inception",
    description: "A mind-bending thriller",
    genre: "Sci-Fi",
  },
  {
    id: "2",
    title: "The Dark Knight",
    description: "A gritty superhero tale",
    genre: "Action",
  },
  {
    id: "3",
    title: "Interstellar",
    description: "A journey through space and time",
    genre: "Sci-Fi",
  },
];

function App() {
  return (
    <>
      <FavoritesProvider>
        <Routes>
          <Route path="/" element={<MovieList movies={movies} />} />
          <Route path="/movie/:id" element={<MovieDetail movies={movies} />} />
        </Routes>
        <FavoritesList />
        <SearchByTitle texto="Input 2" />
      </FavoritesProvider>
      <Header texto="Saludos desde el Header" /> *
      <Saludo texto="Bienvenido a la Movie App" />
      <Button variant="contained" color="primary">
        {" "}
        Hola, MUI!
      </Button>
      <MuiForm/>
      <GridExample/>
      <Footer />
      <InputId/>
      <BasicExample />
      <BasicForm></BasicForm>
      <NavBar />
    </>
  );
}

export default App;

{
  /* <div>
  const [count, setCount] = useState(0)
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */
}
