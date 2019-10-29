import React, {useEffect} from 'react';

/*
useEffect Hook
우리가 만든 리액트컴포넌트가 처음 화면에 나타나게 될때 화면에서 사라지게 될때 작업을 할 수 있고 업데이트 될때에 작업을 할 
수 있게 해주는 함수 

컴포넌트가 마운트될때 언마운트될때 사용할 수 있음. 
마운트될때 그냥 함수 / 삭제될때 return 
*/

function User({ user, onRemove, onToggle}){
    const {username, email, id, active} = user;
    // useEffect(() =>{
    //     console.log('컴포넌트가 화면에 나타남');
    //     // props -> state 
    //     // REST API : 외부 API요청
    //     // D3 Video.js : 라이브러리 사용
    //     // setInterval, setTimeout
    //     return () => {
    //         // clearInterval, clearTimeout
    //         // 라이브러리 인스턴스 제거 
    //         console.log('컴포넌트가 화면에서 사라짐');
    //     };
    // }, []);
    // 업데이트 될때 사용됨 [user]로 주면 / deps배열에 어떤값을 넣게 되면 해당값이 바뀔때마다 함수가 호출됨. 
    // deps배열을 생략하면 리랜더링되고 호출됨. 모든 컴포넌트가 출력됨 해당컴포넌트가 출력되는것이 아님.
    useEffect(() => {
        console.log('user값이 설정됨 ')
        console.log(user);
        return () => {
            console.log('user 값이 바뀌기 전')
            console.log(user);
        }
    },[user]);
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