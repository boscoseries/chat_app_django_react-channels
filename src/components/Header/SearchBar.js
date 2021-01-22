import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
		alignItems: "center",
		height: "100%",
		backgroundColor: "transparent",
		boxShadow: "unset"
	},
	input: {
		flex: 1,
		borderLeft: "0px",
		color: "rgba(239, 239, 239, 1)"
	},
	iconButton: {
		borderRight: "0px",
		borderRadius: "0px",
		padding: "4px",
		color: "rgba(239, 239, 239, 0.5)"
	},
	searchWrapper: {
		margin: "auto",
		width: "90%",
		background: "rgb(56, 59, 121)"
	}
}));

const Search = () => {
	const classes = useStyles();

	return (
		<Paper component="form" className={classes.root}>
			<div className={classes.searchWrapper}>
				<IconButton type="submit" className={classes.iconButton} aria-label="search">
					<SearchIcon />
				</IconButton>
				<InputBase className={classes.input} placeholder="Search" inputProps={{ "aria-label": "search" }} />
			</div>
		</Paper>
	);
};

export default Search;
