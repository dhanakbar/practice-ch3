import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function Layout({children}) {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}

Layout.propTypes = {

}

export default Layout

