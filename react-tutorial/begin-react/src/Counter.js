import React, {useState, useReducer } from "react";

function reducer(state, action){
    switch(action.type)
    {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            throw new Error('Unhandled action');
    }
}

// 클릭시 이벤트는 onClick으로 설정함.
// 이벤트설정시 주의 사항은 함수이름을 넣는 것이지 함수를 호출해서는 안됨.
function Counter(){
    // number라는 상태를 만들건데 이상태의 기본값은 0으로 하겠다. 
    // setNumber는 값을 수정하는 것
    //const [number, setNumber] = useState(0);

    // 초기값은 0이고 reducer를 따라감 dispatch가 reducer를 호출함
    const [number, dispatch] = useReducer(reducer, 0);
    const onIncrease = () =>{
        //setNumber(number + 1);
        // 현재 상태를 가져와서 이런식으로 업데이트 하겠다를 정의해준 것임.
        // 나중에 리액트 컴포넌트를 최적화 하는 과정에서는 이렇게 함수형으로 설정하는 것이 필요함.
        //setNumber(prevNumber => prevNumber + 1);
        dispatch({
            type: 'INCREMENT'
        });
    }
    const onDecrease = () =>{
        //setNumber(number - 1);
        //setNumber(prevNumber => prevNumber - 1);
        dispatch({
            type: 'DECREMENT'
        });
    }

    return(
        <div>
            <h1>{number}</h1>
            <button onClick = {onIncrease}>+1</button>
            <button onClick = {onDecrease}>-1</button>
        </div>
    )
}

export default Counter;