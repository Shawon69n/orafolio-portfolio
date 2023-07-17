import React from 'react';

const sidebarLayout = ({children}) => {
    return (
       
            <div>
                <Link  className="font-semibold" href="/admin/edithometexts">Home </Link>
                <div>{children}</div>
            </div>
       
    );
};

export default sidebarLayout;