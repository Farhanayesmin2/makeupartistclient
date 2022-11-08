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
            }
        ]
    }




 ])

export default router;