export default function QuoteBox({ quote, fetchData }) {
	return (
		<div
			id="quote-box"
			className="d-flex flex-column justify-content-center mx-4 mx-lg-0"
		>
			<h1 id="text" className="fw-bold">
				<i className="bi bi-quote"></i>
				{quote.quote}
			</h1>
			<h4 id="author" className="text-body-secondary">
				- {quote.author}
			</h4>
			<div className="links pt-2">
				<a
					href="https://www.twitter.com/intent/tweet/"
					target="_blank"
					id="tweet-quote"
				>
					<i className="bi bi-twitter h4"></i>
				</a>
				<button
					type="button"
					className="btn btn-outline-dark rounded-pill"
					id="new-quote"
					onClick={fetchData}
				>
					New Quote
				</button>
			</div>
		</div>
	);
}
