import React from 'react'
import Navbar from '../Header/Navbar'
import Footer from '../Footer/Footer'
import Head from 'next/head'
import { ExpNavbar } from '../../../../experimentComponents/expnavbar/ExpNavbar'
const NavFootLayout = ({children,title}) => {
  return (
    <div>
         <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <ExpNavbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default NavFootLayout