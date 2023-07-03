import InvoiceElement from '@/components/PatientDashboard/InvoiceElement';
import LeftNaveBar from '@/components/PatientDashboard/LeftNaveBar';
import React from 'react';

const index = () => {
    return (
        
        <div className='flex flex-wrap'>
            <div className='w-full md:w-1/5'>
                <LeftNaveBar/>
            </div>
            <div className='w-full md:w-3/5 mx-auto mt-10'>
            <InvoiceElement/>
        </div>
        </div>
    );
};

export default index;