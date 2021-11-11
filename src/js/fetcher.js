export const fetcher = async path => {
	const response = await fetch("https://imdb-api.com" + path);
	if (response.status === 200) {
		const data = await response.json();

		return data;
	}

	return null;
};
