import Link from 'next/link';
import React from 'react';
import { MdAdminPanelSettings} from 'react-icons/md';
const AdminPage = () => {
    return (
        <div>
            
            <h1 className=' font-bold text-3xl pt-28 pb-12 flex ml-[630px]'>ADMIN PAGE <MdAdminPanelSettings className='ml-2 text-4xl'/></h1>
            
        <div className="gridContainer">
           <Link  className="font-semibold" href="/admin/edithometexts">Home </Link>
           <Link  className="font-semibold" href="/admin/editpastclient">Past client</Link>
           <Link className="font-semibold" href="/admin/editworks">Works</Link>
           <Link className="font-semibold" href="/admin/editcontact">Contact</Link>
           <Link className="font-semibold" href="/admin/editabout">About</Link>
        </div>
        

        </div>
    );
};

export default AdminPage;