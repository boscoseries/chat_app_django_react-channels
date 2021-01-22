import React from "react";
import "./Header.css";
import deleteIcon from "../../assets/icons/delete.svg";
import clockIcon from "../../assets/icons/clock.svg";
import silenceIcon from "../../assets/icons/silence.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	headerContainer: {
		display: "flex",
		height: "100%",
		justifyContent: "space-between",
		alignItems: "center",
		"& .activeUser": {
			display: "flex",
			justifyContent: "space-evenly",
			alignItems: "center",
			padding: "0.5em 0",
			width: "10em"
		}
	},

	leftIcons: {
		display: "flex",
		justifyContent: "space-evenly",
		alignItems: "center",
		padding: "0.5em 0",
		width: "10em",
		"& img": {
			width: "20px",
			height: "20px"
		}
	},
	profileImage: {
		borderRadius: "50%"
	}
}));

const Header = () => {
	const classes = useStyles();
	return (
		<div className={classes.headerContainer}>
			<div className="activeUser">
				<div>
					<img
						src={
							"https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/review_gallery_carousel_slide_thumbnail/public/screenshots/csm-tv/avatar-the-last-airbender-ss2_0.jpg?itok=ksczlMHO"
						}
						className={classes.profileImage}
						alt="Avatar"
						height={30}
						width={30}
					/>
				</div>
				<div>John</div>
			</div>
			<div className={classes.leftIcons}>
				<img src={silenceIcon} alt="" />
				<img src={clockIcon} alt="" />
				<img src={deleteIcon} alt="" />
			</div>
		</div>
	);
};

export default Header;
