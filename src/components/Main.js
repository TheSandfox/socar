import { useState } from "react"
import Section from "./Section";
import CounterWidget from "./CounterWidget";

const cardListDefault = [
	{
		title:`24시간 언제나`,
		content:'한밤중이나 주말에도 스마트폰으로<br>시간에 구애받지 않고<br>쏘카와 함께 이동하세요.',
		img:'section1.jpg',
	},
	{
		title:`원하는 곳에서`,
		content:'내 주변 3분 거리 쏘카존에서<br>혹은 내가 있는 곳으로 쏘카를 불러<br>어디서나 편하게 출발하세요.',
		img:'section2.jpg',
	},
	{
		title:`필요한 시간만큼`,
		content:'간단한 장보기부터 주말여행까지<br>10분 단위로 원하는 만큼만 이용하세요.',
		img:'section3.jpg',
	},
	{
		title:`다양한 차종을`,
		content:'연인과의 드라이브부터 가족 캠핑까지<br>상황에 맞게 50여 종의 차량을<br>선택해서 이용하세요.',
		img:'section4.jpg',
	},
]

export default function Main(){
	const [cardList,setCardList] = useState(cardListDefault);
	return <main>
		{cardList.map((card,index)=>{
			return <Section key={index} card={card}/>
		})}
		<CounterWidget/>
	</main>
}