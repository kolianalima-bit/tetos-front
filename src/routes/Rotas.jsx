import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Login from "../pages/Login";
import Home from "../pages/Home";
import RotaProtegida from "./rotaProtegida";
import Niveis from "../pages/Niveis";
import PageLayout from "../layouts/PageLayout";
import { useContext } from "react";
IMport ImoveisTipo

const Rotas = () => {
    const { token } = useContext(AdminContext);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                {
                    token && (
                        <Route path="/painel" element={<RotaProtegida><PageLayout /></RotaProtegida>}>
                            <Route index element={<Home />} />
                            <Route path="niveis" element={<Niveis />} />
                             <Route path="imoveis-tipo" element= {<ImoveisTipo />} />
                        </Route>
                    )
                }
                <Route path="*" element={<VoltarPraLogin />} />
            </Routes>
        </BrowserRouter>
    );
}

const VoltarPraLogin = () => {
    return <Navigate to="/" />
}

export default Rotas;