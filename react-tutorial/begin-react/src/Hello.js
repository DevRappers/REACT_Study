import React from 'react'; // react를 불러와서 사용하겠다.

// 컴포넌트를 만드는 방법 
// 1. 함수형태로 만드는 방법
// 컴포넌트이름은 맨앞이 대문자임 
function Hello() {
    // 세미콜론은 있어도 되고 없어도 됨.
    return <div>안녕하세요.</div>;
}

// 이 코드는 Hello라는 컴포넌트를 만들어서 내보내주겠다. 라는 뜻
export default Hello;