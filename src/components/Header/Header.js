import React from "react";
import "./Header.css";
import deleteIcon from "../../assets/icons/delete.svg";
import clockIcon from "../../assets/icons/clock.svg";
import silenceIcon from "../../assets/icons/silence.svg";

const Header = () => {
	return (
		<div className="header">
			<div className="active-user">
				<div className="rounded-image">
					<img
						src={
							"https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/review_gallery_carousel_slide_thumbnail/public/screenshots/csm-tv/avatar-the-last-airbender-ss2_0.jpg?itok=ksczlMHO"
						}
						className="profile-image"
						alt="Avatar"
						height={30}
						width={30}
					/>
				</div>
				<div>John</div>
			</div>
			<div className="left-icons">
				<img className="icons" src={silenceIcon} alt="" />
				<img className="icons" src={clockIcon} alt="" />
				<img className="icons" src={deleteIcon} alt="" />
			</div>
		</div>
	);
};

export default Header;
