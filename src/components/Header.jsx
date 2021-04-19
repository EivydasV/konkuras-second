import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  logo: {
    marginTop: 5,
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
