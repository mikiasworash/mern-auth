// @desc Auth User / Set token
// router POSR /api/users/auth
// @access Public
const authUser = (req, res) => {
  res.status(200).json({ message: 'Authentication successful' })
}

export { authUser }
