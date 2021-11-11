import React from "react";

import useSWR from "swr";
import { fetcher } from "../fetcher";

import { Col, Card, Button } from "react-bootstrap";
import "../../styles/index.scss";

const Movie = () => {
	const { data: MostPopularMovies, isValidating } = useSWR("/en/API/MostPopularMovies/k_z5d6y3ag", fetcher);

	function pickARdmMovie() {
		return MostPopularMovies && MostPopularMovies.items[Math.floor(Math.random() * MostPopularMovies.items.length)];
	}

	function pickAnother() {
		console.log(movie);
		movie = pickARdmMovie();
	}
	let movie = pickARdmMovie();

	return (
		<Col xs={3}>
			{isValidating &&
				!movie && (
					<div className="spinner-border" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				)}
			{movie && (
				<Card className="cardColors">
					<Card.Img variant="top" src={movie.image} />
					<Card.Body>
						<Card.Title>
							Title: {movie.title}
							<br />
							Year: {movie.year}
						</Card.Title>
						<Button variant="primary" className="mr-3" onClick={pickAnother()}>
							Change Movie
						</Button>
						<a href={"https://www.imdb.com/title/" + movie.id} className="w-100 d-flex justify-content-end">
							<Button variant="primary" className="mr-3">
								Learn More
							</Button>
						</a>
					</Card.Body>
				</Card>
			)}
		</Col>
	);
};

export default Movie;
