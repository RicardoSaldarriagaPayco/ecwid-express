import React from 'react';

function Checkout({checkout}){
   const { key, amount, tax, tax_base, description, currency, invoice, country, test, external,acepted,rejected,pending,confirmation,email_billing,name_billing,address_billing,movil_billing,extra1, extra2, extra3} = checkout;

  const openchekout = () =>{
      console.log('click')
    var handler = window.ePayco.checkout.configure({
        key: key,
        test: test
    });

    let data = {
        name: description,
        description: description,
        invoice: invoice,
        currency: currency,
        amount: amount,
        tax_base: tax_base,
        tax:  tax,
        country: country,
        lang: "en",
        external: external,
        acepted: acepted,
        rejected:rejected,
        pending:pending,
        extra1: extra1,
        extra2: extra2,
        extra3: extra3,
        confirmation: confirmation,
        name_billing: name_billing,
        address_billing: address_billing,
        mobilephone_billing: movil_billing,
        email_billing:email_billing
        }
        handler.open(data);
   }
    return(
    <div>
            <div className="loader-container">
                <div className="loading"></div>
            </div>
            <p style={{textAlign:'center'}} className="epayco-title">
                <span className="animated-points">Cargando metodos de pago</span>
                    <br/><small className="epayco-subtitle"></small>
                    <button onClick={() => openchekout()}>
                    <img src="https://369969691f476073508a-60bf0867add971908d4f26a64519c2aa.ssl.cf5.rackcdn.com/btns/epayco/boton_de_cobro_epayco4.png " style={{borderWidth:0+'px'}} alt="" />
                    </button>
            </p>                        
            
</div>
  
        )
}

export default Checkout;