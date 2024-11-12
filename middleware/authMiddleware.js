const jwt = require("jsonwebtoken");
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

exports.authenticateTokenMiddleWare = async (req, res, next) => {
  console.log(`authenticating user for token: ${req.headers["authorization"]}`);
  const authHeader = req.headers["authorization"];
  const accessToken = authHeader && authHeader.split(" ")[1];
  console.log(`accessToken:${accessToken}`);
  if (!accessToken) {
    res.sendStatus(401);
  } else {
    jwt.verify(accessToken, ACCESS_TOKEN_SECRET, (err, payload) => {
      if (err) {
        console.error(`Error occured while verifying token: ${err}`);
        res.sendStatus(403);
      } else {
        req.user = payload.tokenBody
        next()
      }
    });
  }
};
