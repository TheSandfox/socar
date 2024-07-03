import 'css/section.css';
import { Fragment } from 'react';

export default function Section({card}) {
	let sentences = card.content.split('<br>');
	return <section className="section">
		<h2 className="title">{card.title}</h2>
		<div className="content">{
			sentences.map((sentence, index)=>{
				return <Fragment key={index}>{sentence}<br/></Fragment>
			})
		}</div>
		<img src={`${process.env.PUBLIC_URL}/img/${card.img}`} alt={card.img}></img>
	</section>
}