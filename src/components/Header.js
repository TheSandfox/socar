import 'css/header.css';
import { useState } from 'react';

export default function Header() {
	const [active,setActive] = useState(false);
	const handleActive = {
		toggle:()=>{
			setActive(!active);
		}
	}
	return <header style={{backgroundImage:`url(${process.env.PUBLIC_URL}/img/main.jpg)`}}>
		<h1>차가 필요한<br/>모든 순간, 쏘카</h1>
		{/* 검은색 배경 */}
		<div className={`black ${active?'active':''}`}></div>
		{/* 헤더 */}
		<div className={`top ${active?'active':''}`}>
			<div className={`logo`}></div>
		</div>
		{/* 사이드바 */}
		<div className={`side ${active?'active':''}`}>
		</div>
		{/* 토글버튼 */}
		<div className={`toggle ${active?'active':''}`} onClick={handleActive.toggle}>
			<span className={'bar top'}></span>
			<span className={'bar bottom'}></span>
		</div>
	</header>
}