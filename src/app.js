const express = require('express');
const {cors, initialize} = require('./helpers');
const {authRouter, userRouter, exerciseRouter} = require('./router');
const app = express();

// Correr schema de la DB
// initialize();

app.use(express.json());
app.use(cors);
app.use('/', authRouter);
app.use('/user', userRouter);
app.use('/exercise', exerciseRouter);
app.listen(4000, () => console.log('http://localhost:4000/'));