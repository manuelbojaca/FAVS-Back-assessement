const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    //console.log("Auth: ", authorization);
    if (!authorization) {
      throw new Error("expired session auth");
    }

    const [_, token] = authorization.split(" ");

    if (!token) {
      throw new Error("expired session token");
    }

    const { id, email } = jwt.verify(token, process.env.SECRET_KEY);
    //console.log("UserCre: ", id, "_", email);

    req.user = id;
    req.email = email;
    next();
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};
