import React from 'react'
import UserCard from './UserCard'

const UserList = ({ListOfUser}) => {
  return (
  <div>
  {ListOfUser.map((user)=> <UserCard user={user}/>)}
    </div>
  )
}

export default UserList