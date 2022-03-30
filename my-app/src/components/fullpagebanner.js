export function FullPageBanner(props) {
	return (
		<div className="full-page-banner">
			<img className="banner-image" src={props.image} alt="React Home" />
			<h1 className="banner-text">{props.textMain}</h1>
			<h1 className="banner-text-sub">{props.textSub}</h1>
		</div>
	);
}
