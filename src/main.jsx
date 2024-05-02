import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import AboutUs from './Pages/AboutUS/AboutUs.jsx'
import BuyerScreen from './Pages/BuyerScreen/BuyerScreen.jsx'
import BuyerSearchRsult from './Pages/BuyerSearchRsult/BuyerSearchRsult.jsx'
import PropertyDetails from './Pages/PropertyDetails/PropertyDetails.jsx'

const Routes = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children: [
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/about",
        element: <AboutUs/>
      },
      {
        path:"/BuyerScreen",
        element: <BuyerScreen/>
      },
      {
        path:"/BuyerSearchRsult",
        element: <BuyerSearchRsult/>
      },
      {
        path:"/property",
        element: <PropertyDetails/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Routes}/>
  </React.StrictMode>,
)
