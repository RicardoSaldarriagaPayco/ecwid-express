import React, { useEffect, useState, Fragment } from 'react';
import clienteAxios from '../../config/axios';
import Checkout from './checkout';

function Payco(){
    
    const [invoices, storeInvoice] = useState([]);

    const getData = async () =>{
        const invoiceData = await clienteAxios.get('/invoice');
        storeInvoice(invoiceData.data)
    }

    useEffect(()=>{
        getData();
    }, []);

    return(
        <Fragment>
            <h1>checkout</h1>
            {invoices.map(invoice => {return <Checkout key={invoice.id} checkout={invoice}/>})}
        </Fragment>
    )
}   
export default Payco;