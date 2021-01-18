import React, { useState } from "react";
import InputEmoji from "react-input-emoji";
import "./Footer.css";

const Input = () => {
	const [text, setText] = useState("");

	const handleOnEnter = () => {
		return "";
	};

	return (
		<InputEmoji
			value={text}
			onChange={setText}
			cleanOnEnter
			onEnter={handleOnEnter}
			placeholder="Type a message"
			inputClass="chat-input"
			borderColor="rgb(190, 190, 190)"
			borderRadius={3}
		/>
	);
};

export default Input;
