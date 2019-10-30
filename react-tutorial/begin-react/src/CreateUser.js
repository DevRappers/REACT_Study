import React, {useContext, useRef, useCallback} from 'react';
import useInputs from './useInputs';
import { UserDisPatch } from './App';

function CreateUser()
{
    const dispatch = useContext(UserDisPatch);

    const [form, onChange, reset] = useInputs({
        username: '',
        email: ''
    });
  
    const {username, email} = form;

    const nextId = useRef(4);

    const onCreate = useCallback(() => {
        dispatch({
        type: 'CREATE_USER',
        user:{
            id: nextId.current,
            username,
            email,
        }
        })
        nextId.current += 1;
        reset();
    }, [username, email,reset]);

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