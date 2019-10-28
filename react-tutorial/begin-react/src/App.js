import React from 'react';
import Hello from './Hello';  // Hello 컴포넌트 불러오기
import './App.css';
import Wrapper from './Wrapper';

 // 컴포넌트는 두번세번 재사용이 가능함. 
 // 얼핏보기에는 HTML처럼 생겼지만 사실은 JS임. babel이라는 도구를 사용해서 xml형태의 코드가 javascript로 변환이 되는 것
/*
    JSX의 규칙 
    1. 태그를 열게된다면 꼭 닫아주어야 함. br이나 input도 마찬가지임 selfClosing태그를 사용해줘야함. 
    2. 두개 이상의 태그를 사용할 경우 감싸줘야함. <div></div> 또는 <> </>로 감싸줘야함.

    JSX내부에서 javascript값 사용하는 방법
    {}로 감싸서 사용한다.

    style 설정하는 방법
    html에서는 문자열을 집어넣음 style= "~~~";
    객체를 만들어줘야함.
    background-color처럼 대쉬로 구분되어있는 경우 카멜케이스를 사용해서 naming을 해줘야함. 
    backgroundColor이런 식으로.

    class설정하는 방법 
    JSX에서는 class가 아닌 className으로 사용함

    JSX에서 주석 적는 방법
    {}안에 주석을 넣어서 사용해야함

    props에 대해서
    props는 properties의 줄임말로 컴포넌트를 사용할때 자식에게 특정값을 전달하고 싶을 때 사용함.
*/
function App() {
  const name = 'react';

  const style={
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  }
  return (
   <>
    {/* 주석 테스트 */}
    <Wrapper>
      <Hello name="DevRappers" color="blue" isSpecial/>
      <Hello color="red"/>
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </Wrapper>
   </>
  );
}

export default App;
