import React from "react";
import Typography from "@material-ui/core/Typography";
import Hamburger from "hamburger-react";
import IconButton from "@material-ui/core/IconButton";
import Example from "./Example";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    maxWidth: 160,
    marginRight: "auto",
  },
}));
export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="transparent" elevation={0}>
      <Toolbar>
        <a
          href="http://kitm.lt/"
          target="_blank"
          rel="noreferrer"
          className={classes.logo}
        >
          <img src="/kitm.jpg" alt="logo" className={classes.logo} />
        </a>
      </Toolbar>
    </AppBar>
  );
}
