import React, { useState} from 'react';

function InputSample(){
    const [text,setText] = useState('');
    // 수정이 되면 이벤트에 대한 객체가 파라미터로 전달되어온다. e로
    // onChange는 수정할때 발생하는 이벤트이다.
    // e.target.value로 하면 target의 value값을 가져올 수 있음
    const onChange = (e) =>{
        setText(e.target.value);
    }

    const onReset = () => {
        setText('');
    }
    return(
        <div>
            <input onChange={onChange} value={text}/>
            <button onClick={onReset}>초기화</button>
            <br/>
            <b>값: </b>
            {text}    
        </div>
    );
}

export default InputSample;