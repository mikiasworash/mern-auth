import asyncHanlder from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

// @desc Auth User / Set token
// router POST /api/users/auth
// @access Public
const authUser = asyncHanlder(async (req, res) => {
  res.status(200).json({ message: 'Authentication successful' })
})

// @desc Register a new user
// router POST /api/users
// @access Public
const registerUser = asyncHanlder(async (req, res) => {
  const { name, email, password } = req.body

  const userExists = await User.findOne({ email: email })
  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({ name, email, password })
  if (user) {
    generateToken(res, user._id)
    res.status(201).json({ _id: user._id, name: user.name, email: user.email })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc Logout User
// router POST /api/users/logout
// @access Public
const logoutUser = asyncHanlder(async (req, res) => {
  res.status(200).json({ message: 'Logout successful' })
})

// @desc Get User Profile
// router GET /api/users/profile
// @access Private
const getUserProfile = asyncHanlder(async (req, res) => {
  res.status(200).json({ message: 'Get user profile successful' })
})

// @desc Update User Profile
// router PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHanlder(async (req, res) => {
  res.status(200).json({ message: 'Update user profile successful' })
})

export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile }
