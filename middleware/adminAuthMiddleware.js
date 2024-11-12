const jwt = require("jsonwebtoken");
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const ADMIN_SIGNUP_TOKEN_SECRET = process.env.ADMIN_SIGNUP_TOKEN_SECRET

exports.adminAuthenticateTokenMiddleWare = async (req, res, next) => {
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
      } else if (payload.tokenBody && payload.tokenBody.role === "admin") {
        req.user = payload.tokenBody
        next()
      } else {
        console.error(`Role is not admin for the user: ${payload.tokenBody._id}`)
        res.sendStatus(403)
      }
    });
  }
};

exports.adminSignupAuthTokenMiddleware = async (req, res, next) => {
  const apiKey = req.headers["x-api-key"]
  if (!apiKey) {
    return res.status(401).json({ message: "API key missing" })
  }
  if (ADMIN_SIGNUP_TOKEN_SECRET !== apiKey) {
    return res.status(401).json({ message: "Invalid API key" })
  }
  next()
}