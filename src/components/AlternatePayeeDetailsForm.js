'use client'
import React, {useState, useEffect, forwardRef, useImperativeHandle } from 'react'
import axios from 'axios'

const AlternatePayeeDetailsForm = forwardRef((props, ref) => {
    const [formData, setFormData] = useState({
        AlternatePayee1: '',
        AlternatePayee2: '',
        City: '',
        Street: '',
        Country: '',
        BankKey: '',
        BankAccNo: '',
        InvoiceID: '',
    })


    const handleSubmit = async (invoiceId) => {
        
        console.log('Invoice Id received: ', invoiceId);

        const data = {
            ...formData,
            InvoiceID : invoiceId
        }
  
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/alternatePayeeDetails`, data);
            console.log('AlternatePayeeDetails created:', response.data);
            alert('AlternatePayeeDetails created successfully!');
            return response.data
        } catch (error) {
            console.error('Error creating AlternatePayeeDetails:', error);
            alert('Failed to create AlternatePayeeDetails');
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    useImperativeHandle(
        ref, () => {
          return {
            handleSubmit
          };
        }
      )

    useEffect(()=> console.log('FormData of alternatePayeedetails: ', formData), [formData]);

  return (
    <div>
        <form onSubmit={handleSubmit} className="space-y-4">
        <div>
                <label>AlternatePayee1:</label>
                <input 
                    type="text" 
                    name="AlternatePayee1" 
                    value={formData.AlternatePayee1} 
                    onChange={handleChange} 
                    className="bg-[var(--input-background-rgb)] border-white p-2 w-full"
                />
            </div>
            <div>
                <label>AlternatePayee2:</label>
                <input 
                    type="text" 
                    name="AlternatePayee2" 
                    value={formData.AlternatePayee2} 
                    onChange={handleChange} 
                    className="bg-[var(--input-background-rgb)] border-white p-2 w-full"
                />
            </div>
            <div>
                <label>City:</label>
                <input 
                    type="text" 
                    name="City" 
                    value={formData.City} 
                    onChange={handleChange}  
                    className="bg-[var(--input-background-rgb)] border-white p-2 w-full"
                />
            </div>
            <div>
                <label>Street:</label>
                <input 
                    type="text" 
                    name="Street" 
                    value={formData.Street} 
                    onChange={handleChange}  
                    className="bg-[var(--input-background-rgb)] border-white p-2 w-full"
                />
            </div>
            <div>
                <label>Country:</label>
                <input 
                    type="text" 
                    name="Country" 
                    value={formData.Country} 
                    onChange={handleChange}  
                    className="bg-[var(--input-background-rgb)] border-white p-2 w-full"
                />
            </div>
            <div>
                <label>BankKey:</label>
                <input 
                    type="text" 
                    name="BankKey" 
                    value={formData.BankKey} 
                    onChange={handleChange} 
                    step="0.01" 
                    className="bg-[var(--input-background-rgb)] border-white p-2 w-full"
                />
            </div>
            <div>
                <label>BankAccNo:</label>
                <input 
                    type="text" 
                    name="BankAccNo" 
                    value={formData.BankAccNo} 
                    onChange={handleChange}  
                    className="bg-[var(--input-background-rgb)] border-white p-2 w-full"
                />
            </div>
            {/* <div>
                <label>InvoiceID:</label>
                <input 
                    type="text" 
                    name="InvoiceID" 
                    value={formData.InvoiceID} 
                    onChange={handleChange}  
                    className="bg-[var(--input-background-rgb)] border-white p-2 w-full"
                />
            </div> */}
            {/* <button type="submit" className="bg-blue-500 text-white p-2 mt-4">Submit</button> */}
        </form>
    </div>
  )
})

export default AlternatePayeeDetailsForm