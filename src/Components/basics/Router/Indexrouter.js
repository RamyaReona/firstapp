import React from "react";
import { BrowserRouter,Routes, Route, Link} from "react-router-dom";
import HomeRoute from "./HomeRoute.js";
import AboutRoute from "./AboutRoute.js";
import ContactRoute from "./ContactRoute.js";
import Book1 from "./book1.js";
import Book2 from "./book2.js";
import loginpage from './login.js';

const Indexrouter = () =>{ 


return(<BrowserRouter>
<ul>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/about/5'>About</Link></li>
    <li><Link to='/contact'>Contact</Link></li>
    <li><Link to='book/Book1'>Book1</Link></li>
    <li><Link to='book/Book2'>Book2</Link></li>
    <li><Link to='/login'>Login</Link></li>
</ul>
      <Routes>
        <Route path='/' element={<HomeRoute />} />
        <Route path='/about/:id' element={<AboutRoute />} />
        <Route path='/contact' element={<ContactRoute />} />
        <Route path="book">
        <Route path='Book1' element={<Book1 />} />
        <Route path='Book2' element={<Book2 />} />
        </Route>
        <Route path='/login' element={<loginpage />} />
        
        </Routes>
        </BrowserRouter>
        )
    
}

export default Indexrouter;