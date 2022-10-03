const uuid = require('uuid')
const usersDB = [
  {
    id: uuid.v4(),
    first_name: 'Gael',
    last_name: 'Ramirez',
    email: 'gael@gmail.com',
    password: 'root',
    birthday: '2003/01/14'
  }
]

const getAllUsers = () =>{
  return usersDB
}

const getUserByID = (id) =>{
  const data = usersDB.find(user => user.id === id)
  return data
}

const createUser = (user) =>{
  if(
    user.first_name && user.last_name && user.email && user.password && user.birthday
    ){
    const newUser = {
      id: uuid.v4(),
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      password: user.password,
      birthday: user.birthday
    }
    usersDB.push(newUser)
    return newUser
  } else {
    return 'Missing data'
  }
}

module.exports = {
  getAllUsers,
  getUserByID,
  createUser
}