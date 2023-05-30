import Footer from '@/components/SharedComp/Footer/Footer';
import Navbar from '@/components/SharedComp/Header/Navbar';
import WorkPage from '@/components/workPage/WorkPage';
import React from 'react';

const index = () => {
    return (
        <div>
            <Navbar/>
            <WorkPage/>
            <Footer/>
        </div>
    );
};

export default index;