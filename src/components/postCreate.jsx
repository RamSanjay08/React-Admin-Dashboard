import React from 'react'
import {Create,SimpleForm,TextInput,DateInput} from 'react-admin'

const postCreate = () => {
  return (
    <Create title="Create Data">
      <SimpleForm>
        <TextInput source='title'/>
        <TextInput multiline source='body'/>
        <DateInput source='published'/>
      </SimpleForm>
    </Create>
  )
}

export default postCreate