import React from 'react'
import { Edit,SimpleForm,TextInput,DateInput } from 'react-admin'

const postEdit = () => {
  return (
    <Edit title="Edit Post">
      <SimpleForm>
        <TextInput disabled  source='id'/>
        <TextInput source='title'/>
        <TextInput multiline source='body'/>
        <DateInput source='published'/>
      </SimpleForm>
    </Edit>
  )
}

export default postEdit