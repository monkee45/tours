import "./App.css";
import {useState} from "react";

const Tour = (props) => {
	const [readMore, setReadMore] = useState(true)
	const {id, image, info, price, name, removeTour} = props;

	return (
		<article className="single-tour">
			<img src={image} alt={name} />
			<footer>
				<div className="tour-info">
					<h4>{name}</h4>
					<h4 className="tour-price">{price}</h4>
				</div>
				<p>
					{ readMore ? info.substring(0, 200) : info }
					<button onClick={() => setReadMore(!readMore)}>
						{readMore ? "read more": "show Less" }
					</button>
				</p>
				<button className="delete-btn" onClick={() => removeTour(id)}>
					Not Interested
				</button>
			</footer>
		</article>
	)
};

export default Tour;
