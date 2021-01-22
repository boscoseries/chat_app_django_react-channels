import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Icon from "@material-ui/core/Icon";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

const useStyles = makeStyles(theme => ({
	root: {
		padding: "0 18px 0 18px",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		height: "100%",
		width: "100%"
	},
	iconPhohe: {
		display: "flex",
		alignItems: "center"
	}
}));

const NavFooter = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Icon style={{ fontSize: 38, color: green[500] }}>add_circle</Icon>
			<div className={classes.iconPhohe}>
				<PhoneAndroidIcon fontSize="large" htmlColor="rgb(255, 255, 255)" />
				<ArrowDropUpIcon fontSize="small" htmlColor="rgb(255, 255, 255)" />
			</div>
		</div>
	);
};

export default NavFooter;
