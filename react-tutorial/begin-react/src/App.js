import React, { useRef, useReducer, useMemo, useCallback, createContext} from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import useInputs from './useInputs';

function countActiveUsers(users){
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

// 초기값 설정
const initialState = {
  users:[
    {
      id: 1,
      username: 'DevRappers',
      email: 'DevRappers@gmail.com',
      active: true
  },
  {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
  },
  {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
  }
  ]
}

function reducer(state, action)
{
  switch(action.type){
    case 'CREATE_USER':
      return{
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      };
    case 'TOGGLE_USER':
      return{
        ...state,
        users: state.users.map(user =>
          user.id === action.id
          ? {...user, active: !user.active}
          : user  
        )
      };
    case 'REMOVE_USER':
      return{
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      }
    default:
      throw new Error('Unhandled action');
  }
}

export const UserDisPatch = createContext(null);

function App() {
  // initalState가 기본값이기때문에 state에서 불러올 수 있음 값의 변경은 reducer
  const [state,dispatch] = useReducer(reducer, initialState);
  const {users} = state;

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
   <UserDisPatch.Provider value={dispatch}>
    <CreateUser/>
    <UserList users={users}/>
    <div>활성 사용자 수 : {count}</div>
   </UserDisPatch.Provider>
  );
}

export default App;
