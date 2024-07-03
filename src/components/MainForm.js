'use client'
import React ,{useState, useRef} from 'react'
import axios from 'axios';
import InvoiceForm from './InvoiceForm';
import AlternatePayeeDetailsForm from './AlternatePayeeDetailsForm';


function MainForm() {
    const invoiceFormRef = useRef(null);
    const alternatePayeeFormRef = useRef(null);

    const handleCombinedFormSubmit = async (e) => {
        e.preventDefault();
       
        const res = await invoiceFormRef?.current?.handleSubmit();
        console.log('Inserted invoice: ', res?.invoice?._id)
        const id = res?.invoice?._id
        const payeeRes = await alternatePayeeFormRef?.current?.handleSubmit(id);
        console.log('Inserted payee:', payeeRes)
    };


  return (
    <div>
        <InvoiceForm  ref={invoiceFormRef}/>
        <AlternatePayeeDetailsForm ref = {alternatePayeeFormRef}/>
        <button onClick={handleCombinedFormSubmit} className="bg-blue-500 text-white p-2 mt-4">Submit</button>
    </div>
  )
}

export default MainForm