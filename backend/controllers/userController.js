import asyncHanlder from 'express-async-handler'

// @desc Auth User / Set token
// router POSR /api/users/auth
// @access Public
const authUser = asyncHanlder(async (req, res) => {
  res.status(401)
  throw new Error('something went wrong')

  res.status(200).json({ message: 'Authentication successful' })
})

export { authUser }
