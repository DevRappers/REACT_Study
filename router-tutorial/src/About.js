import React from 'react';
import qs from 'qs';

function About({ location }) {
	console.log(location);
	// ignoreQueryPrefix 는 ?를 제외함
	const query = qs.parse(location.search, {
		ignoreQueryPrefix: true
	});

	// true도 문자열로 저장되기 때문에 문자열로 비교해줘야함 숫자도 문자열로 저장됨
	const detail = query.detail === 'true';

	return (
		<div>
			<h1>소개</h1>
			<p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트입니다.</p>
			{detail && <p>detail값이 true입니다!</p>}
		</div>
	);
}

export default About;
