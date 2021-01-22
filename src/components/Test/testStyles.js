import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
	testContainer: {
		display: "grid",
		height: "100%",
		gridTemplateRows: "4em auto 4em",
		[theme.breakpoints.up("sm")]: {
			gridTemplateColumns: "15em auto"
		}
	},
	header: {
		display: "None",
		border: "2px solid grey",
		overflow: "scroll",
		position: "sticky",
		top: 0,
		background: "grey",
		zIndex: 1,
		[theme.breakpoints.up("sm")]: {
			display: "inherit",
			gridColumnStart: 2,
			gridColumnEnd: 4,
			gridRowStart: 1,
			gridRowEnd: 2
		}
	},
	nav: {
		border: "1px solid blue",
		height: "100vh",
		"& div": {
			display: "grid",
			gridTemplateRows: "4em auto 4em",
			height: "100%",
			"& div": {
				background: "red",
				gridRowStart: 2,
				gridRowEnd: 3,
				overflow: "scroll"
			},
			"& .navHeader": {
				background: "black",
				gridRowStart: 1,
				gridRowEnd: 2
			},
			"& .navFooter": {
				background: "black",
				gridRowStart: 3,
				gridRowEnd: 4
			}
		},
		[theme.breakpoints.up("sm")]: {
			gridColumnStart: 1,
			gridColumnEnd: 4,
			gridRowStart: 1,
			gridRowEnd: 2,
			"& div": {
				gridTemplateColumns: "15em auto",
				// position: "fixed",
				// width: "14em",
				"& div": {
					gridColumnStart: 1,
					gridColumnEnd: 2
				}
			}
		}
	},
	main: {
		border: "1px solid violet",
		display: "None",
		[theme.breakpoints.up("sm")]: {
			display: "inherit",
			gridColumnStart: 2,
			gridColumnEnd: 4,
			position: "sticky",
			left: 0,
			right: 0,
			overflow: "scroll",
			"& p": {
				padding: "0 5px"
			}
		}
	},
	footer: {
		display: "None",
		border: "2px solid orange",
		overflow: "scroll",
		position: "sticky",
		bottom: "0",
		background: "grey",
		zIndex: 1,
		[theme.breakpoints.up("sm")]: {
			display: "inherit",
			gridColumnStart: 2,
			gridColumnEnd: 4
		}
	}
}));
