import Footer from '@/components/SharedComp/Footer/Footer';
import Navbar from '@/components/SharedComp/Header/Navbar';
import NavFootLayout from '@/components/SharedComp/NavFootLayout/NavFootLayout';
import WorkPage from '@/components/workPage/WorkPage';
import React from 'react';

const index = () => {
    return (
        <NavFootLayout title="BluFolio - Works">
            <WorkPage/>
        </NavFootLayout>
    );
};

export default index;