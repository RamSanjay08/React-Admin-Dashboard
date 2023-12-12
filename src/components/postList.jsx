import React from 'react'
import {List, Datagrid, TextField,DateField,EditButton,DeleteButton} from 'react-admin'

const postList = () => {
  return (
   <List>
      <Datagrid>
            <TextField source='id'/>
            <TextField source='title'/>
            <TextField source='body'/>
            <DateField source='published'/>
            <EditButton basePath="/posts" />
            <DeleteButton basePath="/posts" />
      </Datagrid>
   </List>
  )
}

export default postList