import ContactPage from '@/components/ContactPage/ContactPage';
import Footer from '@/components/SharedComp/Footer/Footer';
import Navbar from '@/components/SharedComp/Header/Navbar';
import NavFootLayout from '@/components/SharedComp/NavFootLayout/NavFootLayout';
import React from 'react';

const index = () => {
    return (
        <NavFootLayout title="BluFolio - Contact">
            <ContactPage/>
        </NavFootLayout>
    );
};

export default index;