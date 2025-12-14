import Tour from './Tour'
import "./App.css";

const Tours = (props) => {
	const { tours } = props
	return (
		<section>
			<div className="title">
				<h2>All Tours</h2>
				<div className="underline"></div>
			</div>
			<div>
				{tours.map((tour) => (
					<Tour key={tour.id} {...tour} />
      			))}
			</div>
		</section>
	)
}

export default Tours