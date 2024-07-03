import 'css/counterWidget.css';

import { useEffect, useRef, useState } from "react";

export default function CounterWidget() {
	const countDefault = 1000000;
	const isVisible = useRef(window.innerHeight);
	const counterElement = useRef(null);
	const [count,setCount] = useState(0);
	const countTimerRunning = useRef(false);
	const maxCount = useRef(9619184);
	//카운트핸들러
	const handleCount = {
		increase:(val)=>{
			if(count+val>maxCount.current) {
				setCount(maxCount.current);
			} else {
				setCount(count+val);
			}
		},
		reset:()=>{
			setCount(countDefault);
		}
	};
	//타이머핸들러
	const handleCountTimerRunning = {
		start:()=>{
			handleCount.reset();
			countTimerRunning.current = true;
		},
		stop:()=>{
			countTimerRunning.current = false;
		}
	};
	//최초마운트시 스크롤이벤트, 타이머 등록
	useEffect(()=>{
		const scrollCallback = (e)=>{
			let scrollBottom = window.scrollY+window.innerHeight;
			let offsetTop = counterElement.current.offsetTop + counterElement.current.parentElement.offsetTop;
			let offsetBottom = offsetTop + counterElement.current.offsetHeight;
			let newIsVisible = 
				(scrollBottom>offsetTop)&&
				(window.scrollY<offsetBottom)
			if(newIsVisible) {
				// console.log(`${scrollBottom}, ${offsetTop}`);
				if (newIsVisible!==isVisible.current) {
					counterElement.current.classList.add('active');
					handleCountTimerRunning.start();
				}
			} else {
				counterElement.current.classList.remove('active');
				handleCountTimerRunning.stop();
			}
			isVisible.current = newIsVisible;
		}
		window.addEventListener('scroll',scrollCallback);

		
		return ()=>{
			window.removeEventListener('scroll',scrollCallback);
			
		}
	},[])
	//카운트 변동 시 타임아웃 콜백 재설정
	useEffect(()=>{

		const timeoutCallback = ()=>{
			if (countTimerRunning.current) {
				handleCount.increase((400000+parseInt(Math.random()*1000)));
			}
		}

		const timeout = setTimeout(timeoutCallback,25);

		return ()=>{
			clearTimeout(timeout);
		}

	},[count,])
	return <section className={'counterWidget'}>
		<div className='blue'></div>
		<p ref={counterElement}><span className='count'>{count.toLocaleString()}</span>명의 회원이 쏘카와<br/>
		함께하고 있습니다.<br/>
		지금 바로 <span>쏘카 드라이브를</span><br/>
		시작하세요.</p>
	</section>;
}