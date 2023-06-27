import { Foods } from "./components/Foods";
import { HeadLineCards } from "./components/HeadLineCards";
import { Hero } from "./components/Hero";
import { Login } from "./components/Login";
import { NavBar } from "./components/NavBar";
import {  BrowserRouter as HashRouter, Route, Routes} from 'react-router-dom'
import { Signup } from "./components/Signup";
export default function App() {
  return (
    <>
        <NavBar />
        <Hero />
        <HeadLineCards />
        <Foods />
        
    </>
  )
}