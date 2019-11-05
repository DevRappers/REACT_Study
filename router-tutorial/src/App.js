import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

function App() {
	return (
		<div>
			<ul>
				<li>
					<Link to="/">홈</Link>
				</li>
				<li>
					<Link to="/about">소개</Link>
				</li>
				<li>
					<Link to="/profiles">프로필목록</Link>
				</li>
				<li>
					<Link to="/history">예제</Link>
				</li>
			</ul>
			<hr />
			{
				// 스위치는 아무것도 찾지 못할때 notfound같은 페이지를 보여줄때 사용함 왜냐면 스위치는 맨위부터 찾기때문에
			}
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/about" component={About} />
				<Route path="/profiles/" component={Profiles} />
				<Route path="/history" component={HistorySample} />
				<Route
					render={({ location }) => (
						<div>
							<h2>이페이지는 존재하지 않습니다.</h2>
							<p>{location.pathname}</p>
						</div>
					)}
				/>
			</Switch>
		</div>
	);
}

export default App;
