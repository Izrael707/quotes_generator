export default function Loading() {
	return (
		<div
			class="spinner-grow text-secondary"
			style={{ width: "4rem", height: "4rem" }}
			role="status"
		>
			<span class="visually-hidden">Loading...</span>
		</div>
	);
}
