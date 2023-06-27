import AboutPage from '@/components/AboutPage/AboutPage';
import Navbar from '@/components/SharedComp/Header/Navbar';
import NavFootLayout from '@/components/SharedComp/NavFootLayout/NavFootLayout';
import React from 'react';

const index = () => {
    
    return (
        <NavFootLayout title="BluFolio -About">
            <AboutPage/>
        </NavFootLayout>
    );
};

export default index;