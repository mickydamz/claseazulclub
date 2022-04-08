import React from 'react'
import NavBar from './NavBar';
import Heading from './Heading';
import Footer from './Footer';

 const Layout = (props) => {
    return (
        <div>
             <Heading />
            {props.children}
            <Footer />
        </div>

    )
}

export default Layout;