import React from 'react'
import { Create, SimpleForm, TextInput } from 'react-admin'

const userCreate = () => {
  return (
    <Create title="Create Users Data">
      <SimpleForm>
          <TextInput source='name'/>
          <TextInput source='job'/>
          <TextInput source='location'/>
      </SimpleForm>
    </Create>
  )
}

export default userCreate