import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import About from './LearnRoutFlow/About'
import Contact from './LearnRoutFlow/Contact'
import Home from './LearnRoutFlow/Home'
import Error from './LearnRoutFlow/Error'
import GetDynamicRouteParameter from './LearnRoutFlow/GetDynamicRouteParameter'

const LearnRoute = () => {
  return (
    <div>
      {/* <a href="/about">About</a>
      <br></br> */}
      <NavLink to="/" style = {{marginLeft:"20px"}}>Home</NavLink>
      <NavLink to="/about" style = {{marginLeft:"20px"}}>About</NavLink>
      <NavLink to="/contact" style = {{marginLeft:"20px"}}>Contact</NavLink>
      <br></br>
      {/* defining component for specific path */}
      <Routes>
        <Route path = "/" element = {<Home>Home Page</Home>}></Route>
        <Route path = "/about" element = {<About></About>}></Route>
        <Route path = "/contact" element = {<Contact>Contact Page</Contact>}></Route>
        <Route path = "*" element = {<Error>404 page</Error>}></Route>
        <Route path = "/a" element = {<div>a page</div>}></Route>
        <Route path = "/a/a1" element = {<div>a1 page</div>}></Route>
        <Route path = "/a/a1/a2" element = {<div>a2 page</div>}></Route>
        <Route path = "/a/:any" element = {<div>any page</div>}></Route>
        <Route path = "/b/:id1/id/:id2" element = {<GetDynamicRouteParameter></GetDynamicRouteParameter>}></Route>
      </Routes>
    </div>
  )
}

export default LearnRoute

