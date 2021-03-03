import React from 'react';

function Checkout({checkout}){
   const { id, firstName, lastName} = checkout;

  const openchekout = () =>{
      console.log('click')
    var handler = window.ePayco.checkout.configure({
        key: 'f0d5cd55ce4173d87981c04616b99fa8',
        test: false
    });

    let data = {
        name: "Vestido Mujer Primavera",
        description: "Vestido Mujer Primavera",
        invoice: "1234",
        currency: "cop",
        amount: '3000',
        tax_base: '3000',
        tax:  '0',
        country: "co",
        lang: "en",
        external: "false",
        extra1: "extra1",
        extra2: "extra2",
        extra3: "extra3",
        confirmation: "http://secure2.payco.co/prueba_curl.php",
        response: "http://payco.co",
        name_billing: firstName+" "+lastName,
        address_billing: "Carrera 19 numero 14 91",
        type_doc_billing: "cc",
        mobilephone_billing: "3050000000",
        number_doc_billing: "100000000",
        email_billing:firstName+"."+lastName+'@gmail.co'
        }
        handler.open(data);
   }
    return(
    <div>
        <h2>checkout epayco</h2>
    <div>
        <button onClick={() => openchekout()}>Pagar</button>
    </div>
        </div>
        )
}

export default Checkout;