const userModel = require('../models/userModel')
const generateToken = require('../utils/generateToken')

//@desc User Login Authentication
//@router users/login
//@access public
exports.authUser = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const user = await userModel.findOne({ email })
    if (user && (await (password == user.password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      })
    } else {
      console.log('Email or Password Incorrect');
      // res.status(401)
      // throw new Error('Email or Password Incorrect')
    }
  } catch (error) {
    console.log(error);
  }
}

//@desc Obtain the details about the successful login user
//@router users/profile
//@access private
exports.getUserProfile = async (req, res) => {
  try {
    
  } catch (error) {
    console.log(error);
  }
}

