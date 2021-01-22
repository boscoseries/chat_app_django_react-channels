import React from "react";
import LetfHeader from "../Header/Header";
import SearchBar from "../Header/SearchBar";
import { useStyles } from "./testStyles";

const Test = () => {
	const classes = useStyles();

	return (
		<div className={classes.testContainer}>
			<header className={classes.header}>
				<h2>Header</h2>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<p>Header</p>
			</header>
			<nav className={classes.nav}>
				<div>
					<div className="navHeader">Top</div>
					<div>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero</div>
					<div className="navFooter">Bottom</div>
				</div>
			</nav>
			<main className={classes.main}>
				<p>
					Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in
					45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum
					dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
					Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during
					the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum comes from
					sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
					treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
					from a line in section 1.10.32.
				</p>
			</main>
			<footer className={classes.footer}>
				<h2>Footer</h2>
				<br />
				<p>Footer</p>
			</footer>
		</div>
	);
};

export default Test;
