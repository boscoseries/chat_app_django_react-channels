import React from "react";
import RightHeader from "../Header/Header";
import SearchBar from "../Header/SearchBar";
import UserPanel from "../../components/Main/UsersPanel/UserPanel";
import NavFooter from "../../components/Footer/NavFooter";
import addFileIcon from "../../assets/icons/addfile.png";
import ChatInput from "../../components/Footer/ChatInput";
import { useStyles } from "./testStyles";

const Test = () => {
	const classes = useStyles();

	return (
		<div className={classes.testContainer}>
			<header className={classes.header}>
				<RightHeader />
			</header>
			<nav className={classes.nav}>
				<div className="navHeader">
					<SearchBar />
				</div>
				<div className="navMain">
					<UserPanel />
				</div>
				<div className="navFooter">
					<NavFooter />
				</div>
			</nav>
			<main className={classes.main}>Main</main>
			<footer className={classes.footer}>
				<img src={addFileIcon} alt="" />
				<ChatInput />
			</footer>
		</div>
	);
};

export default Test;
