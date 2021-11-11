import React from "react";

import useSWR from "swr";
import { fetcher } from "../fetcher";

import { Row, Col, Card, Button } from "react-bootstrap";
import "../../styles/home.scss";

const Movie = () => {
	const { data: MostPopularMovies } = useSWR("/en/API/MostPopularMovies/k_bf07g0nt", fetcher);

	MostPopularMovies &&
		console.log(MostPopularMovies.items[Math.floor(Math.random() * MostPopularMovies.items.length)]);
	return (
		<Col xs={3}>
			<Card className="cardColors">
				<Card.Img variant="top" src="https://via.placeholder.com/350x200" />
				<Card.Body>
					<Card.Title />
					<Card.Text>
						Some quick example text to build on the card title and make up the bulk of the card&apos;s
						content.
					</Card.Text>

					{/* <Link to={`${props.title}/${item.name}`}> */}
					<Button variant="primary">Learn More</Button>
					{/* </Link> */}
				</Card.Body>
			</Card>
		</Col>
	);
};

export default Movie;
