import Lottie from "lottie-react";
import React from 'react';
import loading from '../../../../loading.json'
const Loading = () => {
    return (
        <div className='loading'>
            <Lottie animationData={loading} />;       
        </div>
    );
};

export default Loading;