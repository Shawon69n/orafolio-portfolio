import ContactPage from '@/components/ContactPage/ContactPage';
import Footer from '@/components/SharedComp/Footer/Footer';
import Navbar from '@/components/SharedComp/Header/Navbar';
import React from 'react';

const index = () => {
    return (
        <div>
            <Navbar/>
            <ContactPage/>
            <Footer/>
        </div>
    );
};

export default index;