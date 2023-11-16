import axios from "axios";
import QuoteBox from "./QuoteBox";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "./Loading";

export default function QuotesApp() {
	const [quote, setQuote] = useState(null);
  
	const fetchData = async () => {
		setQuote(null);
		const response = await axios.get("https://api.api-ninjas.com/v1/quotes", {
			headers: {
				"X-Api-Key": "qDS07BSCIsmO0ZHRVhM9Uw==fetKDucM5PTxtjqE",
			},
		});
		let data = await response.data[0];
		setQuote(data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div
			className="container-fluid p-0 d-flex justify-content-center align-items-center"
			style={{ height: "100vh", background: "gainsboro" }}
			id="app"
		>
			{quote ? <QuoteBox quote={quote} fetchData={fetchData} /> : <Loading />}
		</div>
	);
}
