const jwt = require("jsonwebtoken");

const fetchuser = (req, res, next) => {
  //get the user from the jwt token and add id to req object

  //getting the token from header
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
  const JWT_SECRET = "Samruddhiis@GoodGirl";
  try {
    //extracting the information from authToken
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
};

module.exports = fetchuser;
