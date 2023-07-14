const jwt = require('jsonwebtoken');
const User = require('../models/user');

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        console.log('no authorization header');
        return res.status(401).json('You must be logged in.');
    }
    const token = authorization.replace('Bearer ', '');
    jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
        if (err) {
            console.log('error verifying token');
            return res.status(401).json('You must be logged in.');
        }
        const { userId } = payload;
        console.log('Look for ID:', userId);
        const user = await User.findById(userId);
        if (!user) {
            console.log('no user found');
            return res.status(401).json('You must be logged in.');
        }
        req.user = user;
        next();
    });
};