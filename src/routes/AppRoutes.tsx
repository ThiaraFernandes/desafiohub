import { Routes, Route, } from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Conversor from "../pages/desafios/Conversor/Conversor";
import Buscador from "../pages/desafios/Buscador/Buscador";
import Relogio from "../pages/desafios/RelogioDigital/Relogio";
import Caracter from "../pages/desafios/Caracteres/Caracter";
import Cronometro from "../pages/desafios/Cronometro/Cronometro";
import Sorteador from "../pages/desafios/Sorteador/Sorteador";
import Jokenpo from "../pages/desafios/Jokenpo/Jokenpo";
import DevClubBurguer from "../pages/desafios/DevclubBurger/DevclubBurger";


function AppRoutes() {
  return (

    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/conversor" element={<Conversor />} />
      <Route path="/buscador" element={<Buscador />} />
      <Route path="/relogio" element={<Relogio />} />
      <Route path="/caracteres" element={<Caracter />} />
      <Route path="/cronometro" element={<Cronometro />} />
      <Route path="/sorteador" element={<Sorteador />} />
      <Route path="/jokenpo" element={<Jokenpo />} />
      <Route path="/devclub-burguer" element={<DevClubBurguer />} />
    </Routes>

  );
}

export default AppRoutes;
