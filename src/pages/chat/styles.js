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
    position: "sticky",
    top: 0,
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
    height: "100vh",
    display: "grid",
    gridTemplateRows: "4em auto 4em",
    background: "rgb(39, 41, 109)",
    "& navMain": {
      gridRowStart: 2,
      gridRowEnd: 3,
      overflow: "scroll",
      padding: "2px"
    },
    "& .navHeader": {
      gridRowStart: 1,
      gridRowEnd: 2,
      borderWidth: "0 0 2px 0",
      borderStyle: "solid",
      borderColor: "rgba(0, 0, 0, 0.2)"
    },
    "& .navFooter": {
      gridRowStart: 3,
      gridRowEnd: 4,
      borderWidth: "2px 0 0 0",
      borderStyle: "solid",
      borderColor: "rgba(0, 0, 0, 0.2)"
    },
    [theme.breakpoints.up("sm")]: {
      gridColumnStart: 1,
      gridColumnEnd: 2,
      gridRowStart: 1,
      gridRowEnd: 4,
      gridTemplateColumns: "15em auto",
      "& div": {
        gridColumnStart: 1,
        gridColumnEnd: 2
      }
    }
  },
  main: {
    display: "None",
    borderWidth: "2px 0 2px 0",
    borderStyle: "solid",
    borderColor: "rgba(216, 206, 206, 0.6)",
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
    position: "sticky",
    bottom: "0",
    zIndex: 1,
    "& img": {
      width: "20px",
      height: "20px"
    },
    [theme.breakpoints.up("sm")]: {
      gridColumnStart: 2,
      gridColumnEnd: 4,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0 20px 0 25px"
    }
  }
}));
