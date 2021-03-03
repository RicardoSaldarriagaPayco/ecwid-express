const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/invoice', (req, res)=>{
    const customers = [
        {id:1,key:1, amount: '30000', tax: '0', tax_base: '30000', description:'prueba pago', currency:'cop', invoice:'123ecwid123', country:'co', test:'true',external:'false',acepted:'acepted',rejected:'rejected',pending:'pending',
        confirmation: 'confirmation', email_billing:"email_billing", name_billing:'name_billing',  address_billing:'address_billing',movil_billing:'movil_billing',extra1 : 'extra1', extra2: 'extra2',extra3 : 'extra3'
    }
    ];

    res.json(customers);
});

const port = 5000;

app.listen(port, ()=>console.log(`Server started on port ${port}`));