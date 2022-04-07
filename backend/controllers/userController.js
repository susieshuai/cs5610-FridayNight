const userModel = require('../models/userModel')
const generateToken = require('../utils/generateToken')

//@desc User Register
//@router POST/users/register
//@access public
exports.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body
    const userExists = await userModel.findOne({ email })
    if (userExists) {
      console.log('user exists');
    }
    const user = await userModel.create({ username, email, password })
    if (user){
      res.status(201).json({
        _id: user._id,
        name: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      })
    }else{
      console.log('Invalid user information');
    }
  } catch (error) {
    console.log(error);
  }
},



  //@desc User Login Authentication
  //@router POST/users/login
  //@access public
  exports.authUser = async (req, res) => {
    try {
      const { email, password } = req.body
      const user = await userModel.findOne({ email })
      if (user && (await (password == user.password))) {
        res.json({
          _id: user._id,
          name: user.username,
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
//@router GET/users/profile
//@access private
exports.getUserProfile = async (req, res) => {

  const user = await userModel.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      name: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  } else {
    console.log('User does not exist');
    // res.status(404)
    // throw new Error('User does not exist')
  }

}

