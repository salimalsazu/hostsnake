import { createBrowserRouter } from "react-router-dom";
import About from "../Pages/About/About";
import Login from "../Pages/Contact/Login/Login";
import Reg from "../Pages/Contact/Registration/Reg";
import Home from "../Pages/Home/Home";
import Main from "../Pages/Main/Main";
import Service from "../Pages/Service/Service";
import Services from "../Pages/Service/Services";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/service',
                element: <Service></Service>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Reg></Reg>
            }
        ]
    }
])