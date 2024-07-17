
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/modeluser.js');
const { deleteOnep } = require('../model/modelproduct.js');

exports.register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await new Promise((resolve, reject) => {
      User.findByUsername(username, (error, user) => {
        if (error) {
          reject(error);
        } else {
          resolve(user);
        }
      });
    });

    if (existingUser) {
      return res.status(400).send({ message: 'Username already exists' });
    }

    await new Promise((resolve, reject) => {
      User.addUser(username, password, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });

    res.status(201).send({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Error registering user: ' + err);
    res.status(500).send({ message: 'Error registering user' });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await new Promise((resolve, reject) => {
      User.findByUsername(username, (error, user) => {
        if (error) {
          reject(error);
        } else {
          resolve(user);
        }
      });
    });

    if (!user) {
      res.status(401).send({ message: 'User not found' });
      return;
    }

   
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
     
      const token = jwt.sign({ id: user.id, username: user.username }, 'secretkey', { expiresIn: '1h' });
      res.status(200).send({ token });
    } else {
      res.status(401).send({ message: 'Invalid password' });
    }
  } catch (err) {
    console.error('Error logging in: ' + err);
    res.status(500).send({ message: 'Error logging in' });
  }
 
};