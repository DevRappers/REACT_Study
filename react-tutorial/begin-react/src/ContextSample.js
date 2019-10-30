import React, { createContext, useContext, useState} from 'react';

// context만들어줌.
const MyContext = createContext('defaultValue');

function Child() {
    //useContext : context를 사용할 수 있게 해줌.
    const text = useContext(MyContext);
    return <div>안녕하세요? {text}</div>
}

function Parent({text}){
    return <Child text={text}/>
}

function GrandParent({text}){
    return <Parent text={text}/>
}

function ContextSample(){
    const [value, setValue] = useState(true);
    // context.Provider안에 value로 값을 사용함.
    return (
        <MyContext.Provider value={value ? 'GOOD' : 'BAD'}>
            <GrandParent/>
            <button onClick={()=> setValue(!value)}>CLICK ME</button>
        </MyContext.Provider>
    );
}

export default ContextSample;