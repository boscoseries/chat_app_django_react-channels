import React, { useState } from "react";
import InputEmoji from "react-input-emoji";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	chatInput: {
		boxSizing: "border-box",
		padding: "0.4em"
	}
}));

const Input = () => {
	const classes = useStyles();
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
			inputClass={classes.chatInput}
			borderColor="rgb(190, 190, 190)"
			borderRadius={3}
		/>
	);
};

export default Input;
