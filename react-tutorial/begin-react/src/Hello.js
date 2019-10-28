import React from 'react'; // react를 불러와서 사용하겠다.

// 컴포넌트를 만드는 방법 
// 1. 함수형태로 만드는 방법
// 컴포넌트이름은 맨앞이 대문자임

// props를 사용하고 싶을 경우에는 props라는 파라미터를 사용함. 우리가 넣어준 값들이 객체형태로 들어가있음
// 비구조화 할당을 사용하며 ㄴ편함.
function Hello(props) {
    const {name, color} = props;
    return <div style={{color}}>안녕하세요. {name}</div>;
}

// props값이 넘어오지 않았을경우 기본값을 선택해줌.
// defaultProps를 사용함.
Hello.defaultProps = {
    name: '이름없음'
}

// 이 코드는 Hello라는 컴포넌트를 만들어서 내보내주겠다. 라는 뜻
export default Hello;