import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Banner } = require("../../Pages/Shared/Header/Banner/Banner");



 export  const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [

            {
                path: '/',
                element: <Banner></Banner>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
         ]
         
        
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }


 ])

export default router;