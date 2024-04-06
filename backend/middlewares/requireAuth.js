const jwt = require("jsonwebtoken");
const User = require("../models/user");

async function requireAuth(req, res, next) {
    try {
        //read token of cookie
        token = req.cookies.Authorization;
        //decode token
        const decoded = jwt.verify(token, process.env.SEC);
        //check expiration of token
        if (Date.now() > decoded.exp) return res.sendStatus(401);
        //find user using decoded sub
        const user = await User.findById(decoded.sub);

        if (!user) return res.sendStatus(401);
        //attach user req
        req.user = user;
        //continue on
        next();
    } catch (err) {
        return res.sendStatus(401);
    }
}

module.exports = requireAuth;
