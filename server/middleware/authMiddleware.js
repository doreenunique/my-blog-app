// const jwt = require("jsonwebtoken");

// // Middleware to verify user authentication
// const authMiddleware = (req, res, next) => {
//   const token = req.header("x-auth-token");
// console.log(token)
//   if (!token) {
//     return res.status(401).json({ error: "Authorization token missing" });
//   }

//   try {
//     const decoded = jwt.verify(token, "athens");
//     req.user = decoded;
//     next();
//   } catch (error) {
//     res.status(401).json({ error: "Invalid token" });
//   }
// };

// module.exports = authMiddleware;



const jwt = require("jsonwebtoken");
require("dotenv").config();

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
   console.log(token)
    try {
      const decoded = jwt.verify(token, "athens");
      req.user = decoded; // The decoded payload will be available in req.user
      console.log(req.user);
      next();
    } catch (error) {
      return res.status(403).json({ error: "Failed to authenticate token." });
    }
  } else {
    res.status(401).json({ error: "No token provided." });
  }
};

module.exports = authMiddleware;