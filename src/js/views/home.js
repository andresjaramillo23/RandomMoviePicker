import React, { Component } from "react";

import Movie from "../component/Movie";

import "../../styles/index.scss";

export const Home = () => {
	return (
		<div className="d-flex justify-content-center">
			<Movie />
		</div>
	);
};
