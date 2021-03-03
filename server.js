const express = require('express');
const passport = require('passport');
const session = require('express-session'); //sessiones
const cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
const app = express();
const cors = require('cors');
app.use(cors());
var Cart = require('./model/cart');
app.use(express.urlencoded({extended: true}));//para leer los datos del form
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ type: 'application/*+json' }))
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(cookieParser('secreto123'));
app.use(session({
    secret:'secreto123',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    //res.locals.login = req.isAuthenticated();
    res.locals.session = req.session;
    const fecha = new Date();
    res.locals.year = fecha.getFullYear();
    next();
});

app.get('/invoice', (req, res)=>{
    const customers = [
        {id:1,key:1, amount: '30000', tax: '0', tax_base: '30000', description:'prueba pago', currency:'cop', invoice:'123ecwid123', country:'co', test:'true',external:'false',acepted:'acepted',rejected:'rejected',pending:'pending',
        confirmation: 'confirmation', email_billing:"email_billing", name_billing:'name_billing',  address_billing:'address_billing',movil_billing:'movil_billing',extra1 : 'extra1', extra2: 'extra2',extra3 : 'extra3'
    }
    ];

    res.json(customers);
});

app.get("/data", (req, res) => {
    if(!req.session.cart){
        console.log('no hay data')
    }else{
        res.json(req.session.cart);
    }
});

app.post('/login', urlencodedParser, function (req, res) {
    let body = JSON.stringify({
        username:req.body.username,
        password: req.body.password
    });
    var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});
    cart.add(body);
    req.session.cart = body;            
    console.log(req.session.cart);
    res.redirect('/data');
  })

const port = 5000;

app.listen(port, ()=>console.log(`Server started on port ${port}`));