import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Dashboard from "../Components/Dashboard/Dashboard";


const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/crud-operatrions/dashboard" element={<Dashboard />}/>
        </Routes>
    )
}

export default AllRoutes;