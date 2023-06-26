import Link from 'next/link';
import React from 'react';

const AdminPage = () => {
    return (
        <div>
            <Link href='/admin/edithometexts'>Home texts</Link>
            <Link href='/admin/editpastclient'>Past client</Link>
            <Link href='/admin/editworks'>works</Link>
            <Link href='/admin/editcontact'> Contact</Link>
            <Link href='/admin/editabout'> About</Link>
        </div>
    );
};

export default AdminPage;