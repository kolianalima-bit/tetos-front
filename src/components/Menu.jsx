import { NavLink } from "react-router";

const Menu = () => {
    return (
        <header className="w-55 h-screen bg-blue-500 p-4">
            <h1 className="text-4x1 front-semibold text-white">Tetos</h1>
            <nav className="flex flex-col *:leading-10 *:font-semibold*:text-white!
            rounded duration-200! *pl-4 *:[&.active">
            <ConfigProvider
                theme={{
                    token: {

                    },

                    Button
                }



                    < nav className="flex flex-col *leading-10 *:font-semibold text-white
             *:hover:bg-white/25 *:rounded duration-200! *">
                <NavLink to="/painel">Home</NavLink>
                <NavLink to="/painel/niveis">Níveis</NavLink>
            </nav>
        </header>
    );
};

export default Menu;


