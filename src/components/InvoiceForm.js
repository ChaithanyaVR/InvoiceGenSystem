
'use client'
import React, { useEffect, useState, useRef, useImperativeHandle } from 'react';
import axios from 'axios'; 



const InvoiceForm = React.forwardRef((props, ref) => {

  const formRef = useRef(null);

  const [formData, setFormData] = useState({
      Currency: '',
      InvBasicAmt: '',
      InvTaxAmt: '',
      TotalInvAmt: '',
      AdvancePaid: '',
      TCSApplicable: false,
      NextPayableAmt: '',
      CustomerID: '',
      ProductID: '',
      // DateIssued: new Date()
  });

  const handleSubmit = async (e) => {
        e?.preventDefault();
        const transformedData = {
          ...formData,
          InvBasicAmt: formData.InvBasicAmt ? parseFloat(formData.InvBasicAmt).toFixed(2) : null,
          InvTaxAmt: formData.InvTaxAmt ? parseFloat(formData.InvTaxAmt).toFixed(2) : null,
          TotalInvAmt: formData.TotalInvAmt ? parseFloat(formData.TotalInvAmt).toFixed(2) : null,
          AdvancePaid: formData.AdvancePaid ? parseFloat(formData.AdvancePaid).toFixed(2) : null,
          NextPayableAmt: formData.NextPayableAmt ? parseFloat(formData.NextPayableAmt).toFixed(2) : null,
      };

      try {
          const response = await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/invoice`, transformedData);
          console.log('Invoice created:', response.data);
          alert('Invoice created successfully!');

          return response.data
      } catch (error) {
          console.error('Error creating invoice:', error);
          alert('Failed to create invoice');
      }
  };

  useImperativeHandle(
    ref, () => {
      return {
        handleSubmit
      };
    }
  )

  const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData({
          ...formData,
          [name]: value
      });
  };

  const handleRadio = (e) => {
    const {name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: value === 'true'  
    });

  }

  useEffect(() => console.log('FormData: ', formData), [formData]);



    return (
        <form onSubmit={handleSubmit} className="space-y-4" ref={formRef}>
            
            <div>
                <label>Currency:</label>
                <input 
                    type="text" 
                    name="Currency" 
                    value={formData.Currency} 
                    onChange={handleChange} 
                    maxLength="10" 
                    className="bg-[var(--input-background-rgb)] border-white p-2 w-full"
                />
            </div>
            <div>
                <label>Invoice Basic Amount:</label>
                <input 
                    type="number" 
                    name="InvBasicAmt" 
                    value={formData.InvBasicAmt} 
                    onChange={handleChange} 
                   
                    className="bg-[var(--input-background-rgb)] border-white p-2 w-full"
                />
            </div>
            <div>
                <label>Invoice Tax Amount:</label>
                <input 
                    type="number" 
                    name="InvTaxAmt" 
                    value={formData.InvTaxAmt} 
                    onChange={handleChange} 
                    
                    className="bg-[var(--input-background-rgb)] border-white p-2 w-full"
                />
            </div>
            <div>
                <label>Total Invoice Amount:</label>
                <input 
                    type="text" 
                    name="TotalInvAmt" 
                    value={formData.TotalInvAmt} 
                    onChange={handleChange} 
                    
                    className="bg-[var(--input-background-rgb)] border-white p-2 w-full"
                />
            </div>
            <div>
                <label>Advance Paid:</label>
                <input 
                    type="number" 
                    name="AdvancePaid" 
                    value={formData.AdvancePaid} 
                    onChange={handleChange} 
                    className="bg-[var(--input-background-rgb)] border-white p-2 w-full"
                />
            </div>
            <div>
                <label>TCS Applicable:</label>
                <div>
                    <input 
                        type="radio" 
                        id="tcsYes" 
                        name="TCSApplicable" 
                        value={true}
                        onChange={handleRadio} 
                        className="bg-[var(--input-background-rgb)] border-white"
                    />
                    <label htmlFor="tcsYes">Yes</label>
                </div>
                <div>
                    <input 
                        type="radio" 
                        id="tcsNo" 
                        name="TCSApplicable"
                        value={false} 
                        onChange={handleRadio} 
                        className="bg-[var(--input-background-rgb)] border-white"
                    />
                    <label htmlFor="tcsNo">No</label>
                </div>
            </div>
            <div>
                <label>Next Payable Amount:</label>
                <input 
                    type="number" 
                    name="NextPayableAmt" 
                    value={formData.NextPayableAmt} 
                    onChange={handleChange}  
                    className="bg-[var(--input-background-rgb)] border-white p-2 w-full"
                />
            </div>
            <div>
                <label>Customer ID:</label>
                <input 
                    type="number" 
                    name="CustomerID" 
                    value={formData.CustomerID} 
                    onChange={handleChange} 
                    className="bg-[var(--input-background-rgb)] border-white p-2 w-full"
                />
            </div>
            <div>
                <label>Product ID:</label>
                <input 
                    type="number" 
                    name="ProductID" 
                    value={formData.ProductID} 
                    onChange={handleChange} 
                    className="bg-[var(--input-background-rgb)] border-white p-2 w-full"
                />
            </div>          
        </form>
    );
})

export default InvoiceForm;
