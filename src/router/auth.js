const axios = require('axios');
const {Router} = require('express');
const {sign} = require('jsonwebtoken');
const {createUser, getUser, updateUser} = require('../queries');
const {GOOGLE_URL: url, TOKEN_SECRET, comparePassword} = require('../helpers');
const authRouter = Router();

authRouter.get('/', (_, res) => res.status(200).json({message: 'Creative English API'}));

authRouter.post('/login', async(req, res) => {
  try {
    const {email, password, google} = req.body;
    let user;
    if (google?.access_token) {
      const headers = {'Authorization': `Bearer ${google.access_token}`};
      const {data} = await axios({url, headers});
      if (data?.email) {
        user = await getUser({email: data.email});
        if (!user) {
          user = await createUser({name: data.name, email: data.email, picture: data.picture});
        } else if (!user.picture && await updateUser(user.id, {picture: data.picture})) {
          user.picture = data.picture;
        }
      }
    } else if (email && password) {
      user = await getUser({email});
      if (user && !await comparePassword(password, user.password)) {
        user = null;
      }
    }
    if (user) {
      const token = sign({id: user.id, email: user.email}, TOKEN_SECRET, {expiresIn: "5d"});
      res.status(200).json({user: user.toJSON(), token});
    } else {
      res.status(400).json({message: 'Invalid credentials provided'});
    }
  } catch (error) {
    console.error('router/auth/login error: ', error);
    res.status(500).json({message: 'Internal server error'});
  }
});

module.exports = authRouter;