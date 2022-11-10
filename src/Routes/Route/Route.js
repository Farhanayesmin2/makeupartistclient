import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Register/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import Register from "../../Pages/Register/Register";
import ServiceData from "../../Pages/Home/ServiceData/Service/ServiceData";
import DetailsPage from "../../Pages/Home/ServiceData/DetailsPage/DetailsPage"


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
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/home',
                element: <Home></Home>,
             
            }, 
            {
                path: '/services',
                element: <ServiceData ></ServiceData>,
             
            }, 
            {
                path: '/services/:id',
                element: <DetailsPage></DetailsPage>,
             loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            }, 
           
         ]
        
        
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }


 ])

export default router;