import React from "react";
import LetfHeader from "../../components/Header/Header";
import Input from "../../components/Footer/ChatInput";
import SearchBar from "../../components/Header/SearchBar";
import NavFooter from "../../components/Footer/NavFooter";
import UserPanel from "../../components/Main/UsersPanel/UserPanel";
import addFileIcon from "../../assets/icons/addfile.png";

import "./Chat.css";

const Chat = props => {
	return (
		<div className="external-container">
			<header>
				<div className="header-container">
					<div className="header-item-left">
						<SearchBar />
					</div>
					<div className="header-item-right">
						<LetfHeader />
					</div>
				</div>
			</header>
			<div className="main-container">
				<nav>
					<UserPanel />
				</nav>
				<main>Main</main>
			</div>
			<footer>
				<div className="footer-container">
					<div className="footer-item-left">
						<NavFooter />
					</div>
					<div className="footer-item-right">
						<img src={addFileIcon} className="icons" alt="" />
						<Input />
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Chat;
