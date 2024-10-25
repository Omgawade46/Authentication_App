
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./About"
import Home from "./Home"
import Signin from "./Signin"
import Signup from "./Signup"
import Profile from "./Profile"
import Header from "./components/Header"
import PrivateRoute from "./components/PrivateRoute"
export default function App() {
  return (
   <BrowserRouter>
   <Header />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/sign-in" element={<Signin />} />
    <Route path="/sign-up" element={<Signup />} />
    
    <Route element={<PrivateRoute />}>
    <Route path='/profile' element={<Profile />} />
        </Route>
    
   </Routes>
   
   </BrowserRouter>
  )
}
