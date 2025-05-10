import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ success: false, message: 'Not Authorized. Login Again' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    if (!decoded?.id) {
      return res.status(401).json({ success: false, message: 'Invalid Token' });
    }

    req.userId = decoded.id; // ✅ attach to req.userId

    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Invalid or Expired Token' });
  }
};

export default userAuth;
