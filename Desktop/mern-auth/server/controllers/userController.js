import userModel from '../models/userModel.js';

export const getUserProfile = async (req, res) => {
  try {
    const user = await userModel.findById(req.userId).select('-password');

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    return res.json({ success: true, userData: user });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
