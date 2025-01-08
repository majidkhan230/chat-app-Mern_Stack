import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    console.log(token);

    const decodedToken = await jwt.verify(token, process.env.SECRET_KEY);

    console.log(decodedToken);

    req.body.userId = decodedToken._id;

    next();
  } catch (error) {
    res.send({
      sucess: false,
      error: error.message,
    });
  }
};

export default authMiddleware;
