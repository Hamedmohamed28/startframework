import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import MasterLayout from './Component/MasterLayout/MasterLayout';
import About from './Component/About/About'
import Portofolio from './Component/Portofolio/Portofolio'
import Navbar from './Component/Navbar/Navbar';
import Contact from './Component/Contact/Contact';
const router = createHashRouter([
  {path:'',element:<MasterLayout/>,children:[
    {path:'',element:<Home/>},
    {path:'About',element:<About/>},
    {path:'Portofolio',element:<Portofolio/>},
    {path:'Contact',element:<Contact/>},
  ]}
])

function App() {
  return (
    <>
    <RouterProvider router={router}/>

    </>
  );
}

export default App;
