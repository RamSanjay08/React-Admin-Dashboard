import React from 'react'
import { List,Datagrid,TextField,EditButton,DeleteButton } from "react-admin"

const userList = () => {
  return (
    <List>
      <Datagrid>
        <TextField  disabled source='id'/>
        <TextField source='name'/>
        <TextField source='job'/>
        <TextField source='location'/>
        <EditButton basePath='users'/>
        <DeleteButton basePath='users'/>
      </Datagrid>
    </List>
  )
}

export default userList