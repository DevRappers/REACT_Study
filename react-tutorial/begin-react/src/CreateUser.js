import React from 'react';

function CreateUser({ username, email, onChange, onCreate})
{
    return (
        <div>
            <input 
                name="username" 
                placeholder="계정명"
                onChange={onChange} 
                value={username}/>
            <input
                name="email" 
                placeholder="이메일"
                onChange={onChange} 
                value={email}
            />
            <button onClick={onCreate}>등록</button>
        </div>
    )
}

// 컴포넌트의 변화가 없으면 리랜더링 하지않음. props가 바뀌었을때만 리랜더링해줌
export default React.memo(CreateUser);