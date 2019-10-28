import React from 'react';
import Hello from './Hello';  // Hello 컴포넌트 불러오기

function App() {
  // 컴포넌트는 두번세번 재사용이 가능함.
  return (
   <div>
    <Hello />
    <Hello />
   </div>
  );
}

export default App;
