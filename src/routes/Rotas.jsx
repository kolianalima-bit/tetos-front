import { BrowserRouter, Route, Routes } from "react-router";
import Login from "../pages/Login";
import Home from "../pages/Home";
import RotaProtegida from "./RotaProtegida";
import Niveis from "../pages/Niveis";
Import PageLayout from "../components/PageLayout";

const Rotas = () => {
    const token = sessionStorage.getItem("token");
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />

            </Routes>
            {
                token && (
                <Route path="/painel" element={<RotaProtegida><PageLayout /></RotaProtegida>} />
                <Route index element={<Home />>} />
                <Route path="/niveis" element={<Niveis />} />

                )
            }

        </Routes>
        </BrowserRouter >    
    );
}

export default Rotas;