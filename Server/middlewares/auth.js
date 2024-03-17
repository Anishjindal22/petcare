const jwt = require("jsonwebtoken");

exports.auth = async (req, res, next) => {
  try {
    const token =
      req.headers["authorization"].split(" ")[1] ||
      req.body.token ||
      req.cookies.token ||
      req.get("Authorization")?.replace("Bearer ", "");

    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(200).send({
          message: "Auth failed",
          success: false,
        });
      } else {
        req.body.userId = decode.id;
        next();
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      success: false,
      message: "Error in validating token",
    });
  }
};

exports.isAdmin = async (req, res, next) => {
  try {
    if (req.user.accountType !== "Admin") {
      return res.status(400).json({
        success: false,
        message: "This is protected routes for admin",
      });
    }
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Admin role cannot be verified please try again later",
    });
  }
};
