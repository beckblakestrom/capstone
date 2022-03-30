import React from "react";
import { HashLink } from "react-router-hash-link";
import { useState, useEffect } from "react";

export default function Nav() {
	const [scrollPosition, setScrollPosition] = useState(0);
	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div id="navbar" className="navbar">
			<HashLink
				id="intro-link"
				to="/home/#introduction"
				className="navbar__link">
				Introduction
			</HashLink>
			<HashLink id="vision-link" to="/home/#vision" className="navbar__link">
				Vision
			</HashLink>
			<HashLink id="build-link" to="/home/#build" className="navbar__link">
				Build
			</HashLink>
			<HashLink
				id="final-link"
				to="/home/#finalproduct"
				className="navbar__link">
				Final Product
			</HashLink>
		</div>
	);
}
