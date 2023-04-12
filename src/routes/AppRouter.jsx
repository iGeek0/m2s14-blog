import { Navigate, Route, Routes } from 'react-router-dom';
// Mis componentes(alias paginas)
import Home from '../pages/Home';
import World from '../pages/World';
import Us from '../pages/Us';

/*
puede recibir 2 props una llamada path y una llamada element
*/

function AppRouter() {
    return (
        <Routes>
            <Route path="home" element={<Home/>}/>
            <Route path="world" element={<World/>}/>
            <Route path="us" element={<Us/>}/>
            <Route path="/" element={<Navigate to="/home"/>}/>
        </Routes>
    );
}

export default AppRouter;