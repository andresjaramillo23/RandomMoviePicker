import React, { useState, useEffect } from "react";

import useSWR from "swr";
import { fetcher } from "../fetcher";

import { Col, Card, Button } from "react-bootstrap";

const Movie = () => {
	const [movieIndex, setMovieIndex] = useState(0);

	const { data: mostPopularMovies, isValidating } = useSWR("/en/API/MostPopularMovies/k_2c1sizm2", fetcher, {
		refreshInterval: 0,
		revalidateOnFocus: false
	});

	let movie = React.useMemo(() => mostPopularMovies && mostPopularMovies.items[movieIndex], [
		mostPopularMovies,
		movieIndex
	]);

	useEffect(
		() => {
			if (mostPopularMovies) {
				setMovieIndex(Math.floor(Math.random() * mostPopularMovies.items.length));
			}
		},
		[mostPopularMovies]
	);

	return (
		<Col xs={3}>
			{isValidating &&
				!mostPopularMovies && (
					<div className="spinner-border" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				)}
			{mostPopularMovies &&
				movie && (
					<Card className="cardColors">
						<Card.Img variant="top" src={movie.image} />
						<Card.Body>
							<Card.Title>
								Title: {movie.title}
								<br />
								Year: {movie.year}
							</Card.Title>
							<Button
								variant="primary"
								className="mr-3"
								onClick={() => {
									setMovieIndex(Math.floor(Math.random() * mostPopularMovies.items.length));
								}}>
								Change Movie
							</Button>
							<a
								href={"https://www.imdb.com/title/" + movie.id}
								className="w-100 d-flex justify-content-end">
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
