
const express = require('express');
const cors = require('cors');
const workersRoute = require('./route/routerworkers.js');
const workshopRoute = require('./route/routerworkshop.js');
const authRouter = require('../server/route/routerauthentification.js');
const productRouter=require('../server/route/routerproduct.js')
const app = express();

app.use(cors()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.use('/auth/user', authRouter);
app.use('/main/workers', workersRoute);
app.use('/main/workshop', workshopRoute);
app.use('/main/product', productRouter);


const port = 3000;

app.get("/", (req, res) => res.send('Server is running'));

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});