import React from 'react'
import { Admin, Resource} from 'react-admin'
import restProvider from 'ra-data-simple-rest';
import postList from './components/postList';
import postEdit from './components/postEdit';
import postCreate from './components/postCreate';
import userList from './components/userList';
import userEdit from './components/userEdit';
import userCreate from './components/userCreate';

const App = () => {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource name='users' list={userList} edit={userEdit} create={userCreate}></Resource>
       <Resource name='posts' list={postList} edit={postEdit} create={postCreate}></Resource>
    </Admin>
  )
}

export default App