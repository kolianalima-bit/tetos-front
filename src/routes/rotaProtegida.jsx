import { Navigate } from "react-router";
import { AXIOS } from "../services";
Import { useContets } from "../services";


const RotaProtegida = ({ children }) => {

    const {token, logout} = useContext (adminContext);


    AXIOS.interceptors.request.use(
        function (config) {
            config.headers.Authorization = `Bearer ${token}`
            return config;
        },
        function (error) {
            return Promise.reject(error);
        }
    );


    AXIOS.interceptors.response.use(
        function (response) {

            return response;
        },
        function (error) {

            if (error.status == 401) {
               logout();
            }
            return Promise.reject(error);
        }
    );

    return token ? children : <Navigate to="/" />
}

export default RotaProtegida;