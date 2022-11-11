import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Register/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import Register from "../../Pages/Register/Register";
import ServiceData from "../../Pages/Home/ServiceData/Service/ServiceData";
import DetailsPage from "../../Pages/Home/ServiceData/DetailsPage/DetailsPage"
import AddService from "../../PrivatePage/AddService/AddService";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Gallery from "../../Pages/Others/Gallery/Gallery";
import Blog from "../../Pages/Others/Blog/Blog";
import AboutMe from "../../Pages/Others/AboutMe/AboutMe";
import MyReview from "../../PrivatePage/MyReview/MyReview"



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
                path: '/gallery',
                element: <Gallery></Gallery>   ,
             
            }, 
            {
                path: '/blog',
                element: <Blog></Blog>   ,
             
            }, 
            {
                path: '/about',
                element: <AboutMe ></AboutMe>   ,
             
            }, 
            {
                path: '/review',
                element: <PrivateRoute> <MyReview></MyReview> </PrivateRoute>   ,
               
             
            }, 
            {
                path: '/services',
                element: <ServiceData ></ServiceData>,
             
            }, 
            {
                path: '/addservice',
                element:<PrivateRoute> <AddService></AddService> </PrivateRoute>   ,
             
            }, 
            {
                path: '/services/:id',
                element: <DetailsPage></DetailsPage>,
             loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            }, 



            // {
            //     path: '/setlimit/:id',
            //     element: <SetLimitDetails></SetLimitDetails>,
            //  loader: ({params}) => fetch(`http://localhost:5000/setlimit/${params.id}`)
            // }, 
           
         ]
        
        
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }


 ])

export default router;