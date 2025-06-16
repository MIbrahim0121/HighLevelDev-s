import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Hero2 from './Components/Hero2'
import Hero3 from './Components/Hero3'
import AboutUs from './Components/AboutUs'
import ContactUs from './Components/ContactUs'
// import AbtGys from './Components/AbtGys'


const App = () => {
// const router = createBrowserRouter([
//     {
//       path:"/aboutMe",
//       element:<><AbtGys/></>

//     }
//   ])

  return (
    <div>
      {/* <RouterProvider router={router}/> */}
    <Navbar/>
    <Hero/>
    <Hero2/>
    <Hero3/>
    <AboutUs/>
    <ContactUs/>
    <hr className='text-gray-300  ' />
    {/* <AbtGys/> */}
    
    </div>
  )
}

export default App