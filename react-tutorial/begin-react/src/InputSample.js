import React, { useState} from 'react';

function InputSample(){
    // 객체형태로 useState를 이용함
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    // 비구조화 할당
    const {name, nickname} = inputs;

    //const [text,setText] = useState('');
    // 수정이 되면 이벤트에 대한 객체가 파라미터로 전달되어온다. e로
    // onChange는 수정할때 발생하는 이벤트이다.
    // e.target.value로 하면 target의 value값을 가져올 수 있음
    const onChange = (e) =>{
        // setText(e.target.value);
        const {name,value} = e.target;

        // 객체를 복사해줘야함 변경하려면 
        // [name]을 쓰면 name이 nickname인가 name인가를 알아내줌
        setInputs({
            ...inputs,
            [name]: value,
        });
    }

    const onReset = () => {
        // setText('');
        setInputs({
            name: '',
            nickname: ''
        });
    }
    return(
        <div>
        { 
            // 한개의 input관리하기
            /*<input onChange={onChange} value={text}/>
            <button onClick={onReset}>초기화</button>
            <br/>
            <b>값: </b>
            {text}   */
        } 
        <input name="name" placeholder="이름" onChange={onChange} value={name}/>
        <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
        <button onClick={onReset}>초기화</button>
        <div>
            <b>값: </b>
            {name} ({nickname})
        </div>
        </div>
    );
}

export default InputSample;