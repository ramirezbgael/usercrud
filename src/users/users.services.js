const {getAllUsers, getUserByID, createUser} = require('./users.controllers')

const getUsers = (req, res) =>{
  const data = getAllUsers()
  res.status(200).json(data)
}

const getOneUser = (req, res) =>{
  const id = req.params.id
  const data = getUserByID(id)
  if(data){
    res.status(200).json(data)
  } else {
    res.status(404).json({id: id, message: 'Invalid ID'})
  }
}

const createNewUser = (req, res) =>{
  const user = req.body

  if(user){
    const data = createUser(user)
    res.status(201).json(data)
  } else {
    res.status(400).json({message: 'Missing or invalid data'})
  }
}

module.exports = {
  getUsers,
  getOneUser,
  createNewUser
}