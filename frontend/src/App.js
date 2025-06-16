
import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './Component/Pages/Home';
import About from './Component/Pages/About';
import Navbar from './Component/Navbar';
import Footer from './Component/Pages/Footer';
import Contact from './Component/Pages/Contact';
import Ragistration from './Component/Pages/Ragistration';
import Gallery from './Component/Pages/Gallery';
import Carrer from './Component/Pages/Carrer';
import Courses from './Component/Courses';
import Java from './Component/Course/Java';
import Reactdevelopment from './Component/Course/Reactdevelopment';
import Mernstack from './Component/Course/Mernstack';
import Excel from './Component/Course/Excel';
import Javascript from './Component/Course/Javascript';
import Mongo from './Component/Course/Mongo';
import Mysql from './Component/Course/Mysql';
import Userinterfec from './Component/Course/Userinterfec';
import Cplus from './Component/Course/Cplus';
import Popup from './Component/Pages/Popup';
import Sign from './Component/Pages/Sign';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutComponent />,
    children: [
      {
        path:'/home',
        element: <Home/>,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
      path: '/ragistration',
      element: <Ragistration />,
  },
  {
    path: '/gallery',
    element: <Gallery />,
},
{
  path: '/carrer',
  element: <Carrer />,
},
{
  path: '/courses',
  element: <Courses />,
},
{
  path: '/java',
  element: <Java />,
},
{
  path: '/mernstack',
  element: <Mernstack />,
},
{
  path: '/reactdevelopment',
  element: <Reactdevelopment />,
},
{
  path: '/excel',
  element: <Excel />,
},
{
  path: '/javascript',
  element: <Javascript />,
},
{
  path: '/mongodb',
  element: <Mongo />,
},
{
  path: '/mysql',
  element: <Mysql />,
},
{
  path: '/userinterface',
  element: <Userinterfec />,
},
{
  path: '/cplus',
  element: <Cplus />,
},
{
  path: '/sign',
  element: <Sign />,
},
{
  path: '/',
  element: <Popup />,
},

    ],
  },
]);

function LayoutComponent() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

function App() {
  return <RouterProvider router={router} />;
 
}

export default App;
