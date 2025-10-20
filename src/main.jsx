import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import Home from './Pages/Home.jsx';
import AddCoffee from './Pages/AddCoffee.jsx';
import UpdateCoffee from './Pages/UpdateCoffee.jsx';
import Veiws from './Pages/Veiws.jsx';
import Error from './Pages/Error.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:() =>fetch('http://localhost:5000/coffee')
      },
      {
        path:"/add_coffee",
        element:<AddCoffee></AddCoffee>
      },
      {
        path:"/update_coffee/:id",
        element:<UpdateCoffee></UpdateCoffee>,
        loader:({params}) =>fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path:"/coffee_views",
        element:<Veiws></Veiws>
      },
      {
        path:"/coffee_Error",
        element:<Error></Error>
      }
     
    ]
  },
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
