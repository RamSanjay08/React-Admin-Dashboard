import React from 'react'
import { Edit, SimpleForm, TextInput } from "react-admin"

const userEdit = () => {
  return (
    <Edit title="Edit Users">
      <SimpleForm>
        <TextInput disabled source='id'/>
        <TextInput source='name'/>
        <TextInput source='job'/>
        <TextInput source='location'/>
      </SimpleForm>
    </Edit>
  )
}

export default userEdit