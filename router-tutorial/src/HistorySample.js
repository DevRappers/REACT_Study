import React, { useEffect } from 'react';

function HistorySample({ history }) {
	const goBack = () => {
		// 뒤로가기
		history.goBack();
	};

	const goHome = () => {
		// 이동
		history.push('/');
	};
	// const replaceToHome = () => {
	//     // push와 replace의 차이는 push는 방문기록을 남기지만 replace는 방문기록을 남기지 않음
	// 	history.replace('/');
	// };
	useEffect(
		() => {
			console.log(history);
			const unblock = history.block('정말 떠나실건가요?');
			return () => {
				unblock();
			};
		},
		[ history ]
	);
	return (
		<div>
			<button onClick={goBack}>뒤로가기</button>
			<button onClick={goHome}>홈으로</button>
			{
				//<button onClick={goHome}>홈으로 (Replace)</button>
			}
		</div>
	);
}

export default HistorySample;
