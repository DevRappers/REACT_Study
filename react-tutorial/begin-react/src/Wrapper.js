import React from "react";

// 이 안에 있는 값을 조회하기 위해 사용하는 것이 props children
// <Wrapper> blahblah</Wrapper>
function Wrapper( {children}) {
    const style = {
        border: '2px solid black',
        padding: 16
    };

    return <div style={style}>{children}</div>
}

export default Wrapper;