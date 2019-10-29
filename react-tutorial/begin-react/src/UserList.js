import React from 'react';

function User({ user, onRemove, onToggle}){
    const {username, email, id, active} = user;
    return(
        <div>
            <b style={{
                color: active ? 'green' : 'black',
                cursor: 'pointer'
            }}
            onClick={() => onToggle(id)}
            >{username}</b> 
            &nbsp;
            <span>({email})</span>
            <button onClick={() => onRemove(id)}>❌</button>
        </div>
    );
}

function UserList({users, onRemove, onToggle}) {  
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
              // key가 없으면 생성하거나 수정하거나 삭제하거나 할때 불편함 어떤 것을 삭제 추가해야할지 어디에 추가해야할지 찾지못함
              users.map(
                  user => (<User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>)
              )
          }
        </div>
    )
}

export default UserList;