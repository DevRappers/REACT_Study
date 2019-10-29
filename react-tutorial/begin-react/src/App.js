import React, { useRef, useState, useMemo, useCallback} from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
// import Hello from './Hello';  // Hello 컴포넌트 불러오기
// import Wrapper from './Wrapper';
// import Counter from './Counter';
// import InputSample from './InputSample';
// import './App.css';

// 컴포넌트는 두번세번 재사용이 가능함. 
// 얼핏보기에는 HTML처럼 생겼지만 사실은 JS임. babel이라는 도구를 사용해서 xml형태의 코드가 javascript로 변환이 되는 것

/*
    JSX의 규칙 
    1. 태그를 열게된다면 꼭 닫아주어야 함. br이나 input도 마찬가지임 selfClosing태그를 사용해줘야함. 
    2. 두개 이상의 태그를 사용할 경우 감싸줘야함. <div></div> 또는 <> </>로 감싸줘야함.

    JSX내부에서 javascript값 사용하는 방법
    {}로 감싸서 사용한다.

    style 설정하는 방법
    html에서는 문자열을 집어넣음 style= "~~~";
    객체를 만들어줘야함.
    background-color처럼 대쉬로 구분되어있는 경우 카멜케이스를 사용해서 naming을 해줘야함. 
    backgroundColor이런 식으로.

    class설정하는 방법 
    JSX에서는 class가 아닌 className으로 사용함

    JSX에서 주석 적는 방법
    {}안에 주석을 넣어서 사용해야함

    props에 대해서
    props는 properties의 줄임말로 컴포넌트를 사용할때 자식에게 특정값을 전달하고 싶을 때 사용함.
*/

function countActiveUsers(users){
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

function App() {
  // const name = 'react';

  // const style={
  //   backgroundColor: 'black',
  //   color: 'aqua',
  //   fontSize: 24,
  //   padding: '1rem'
  // }
  const [inputs, setInputs] = useState({
  username: '',
  email: ''
});

const {username, email} = inputs;

// useCallback을 사용하면 inputs가 바뀌면 함수를 변경하고 그렇지 않으면 그대로 재사용함.
const onChange = useCallback((e) =>{
  const {name,value} = e.target;
  setInputs({
    ...inputs,
    [name] : value
  });
},[inputs]);

const [users, setUsers] = useState([
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
    ]);

  // 마지막 +1 
  // useRef는 특정DOM을 선택할때 사용해도 되지만 어떠한 값을 기억하고 싶을 경우에도 사용함.
  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    
    // 배열을 복사해주고 뒤에 새로운 항목을 추가해줌
    // push를 쓰면 업데이트가 되지 않음.
    //setUsers([...users, user]);
    setUsers(users.concat(user));

    setInputs({
      username: '',
      email: ''
    });
    // nextId값을 가져오고 싶을경우 
    //console.log(nextId.current);

    // useRef로 한 값을 변경시켜주고 싶을때 
    nextId.current += 1;
  },[username,email,users]);

  const onRemove = useCallback(id =>{
    // filter를 이용해서 id가 삭제한 아이디가 아닌것만 출력 
    setUsers(users.filter(user => user.id !== id));
  },[users]);

  const onToggle = useCallback(id => {
    setUsers(users.map(
      user => user.id === id
      ? {...user, active: !user.active} 
      : user
    ))
  },[users]);

  // useMemo를 사용하지 않게 되면 리랜더링 될때마다 수를 센다. 
  // users가 바뀔때에만 함수를 실행함.
  const count = useMemo(()=> countActiveUsers(users), [users]);
  return (
   <>
    {/* 주석 테스트 */}
    {
      /* 
    <Wrapper>
      <Hello name="DevRappers" color="blue" isSpecial/>
      <Hello color="red"/>
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </Wrapper>
    <Counter/>
    <InputSample/>
    */
    }
    <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
    <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    <div>활성 사용자 수 : {count}</div>
   </>
  );
}

export default App;
