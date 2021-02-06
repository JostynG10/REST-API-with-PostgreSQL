const jwt = require('jsonwebtoken');
const config = require('@token/config');
const jwt_decode = require('jwt-decode');

// Token extraction and verification
const verifyToken = async (req, res, next) => {
    const bearerHeader = req.headers['authorization']
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        await jwt.verify(req.token, config.secret, (error) => {
            if (!error) {
                decoded = jwt_decode(req.token);
                next();
            } else {
                res.status(403).json({
                    message: "Invalid token"
                });
            };
        });
    } else {
        res.sendStatus(403);
    };
};

module.exports = {
    verifyToken
};