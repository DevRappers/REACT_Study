import React from 'react';

function User({ user }){
    return(
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    )
}

function UserList() {
    const users = [{
            id: 1,
            username: 'DevRappers',
            email: 'DevRappers@gmail.com'
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com'
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com'
        }
    ];
    
    return (
        <div>
          {/*
            <div>
                <b>{users[0].username}</b> <span>({users[0].email})</span>
            </div>
            <div>
                <b>{users[1].username}</b> <span>({users[1].email})</span>
            </div>
            <div>
                <b>{users[2].username}</b> <span>({users[2].email})</span>
            </div>
            <User user={users[0]}/>
            <User user={users[1]}/>
            <User user={users[2]}/>
          */}
          {
              // map을 사용해주면 더 간단해짐 하지만 key가 있어야함. 고유값
              // 만약 고유값이 없으면 index를 사용해도됨 key={index}
              users.map(
                  user => (<User user={user} key={user.id}/>)
              )
          }
        </div>
    )
}

export default UserList;