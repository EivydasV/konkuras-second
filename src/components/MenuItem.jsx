import * as React from "react";
import { motion } from "framer-motion";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import Tooltip from "@material-ui/core/Tooltip";
import FacebookIcon from "@material-ui/icons/Facebook";
import SchoolIcon from "@material-ui/icons/School";
import Typography from "@material-ui/core/Typography";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
  },
}));

export const MenuItem = ({ i, open }) => {
  const classes = useStyles();
  const data = [
    {
      title: "KITM Website",
      a: "http://kitm.lt/",
      icon: <SchoolIcon />,
      text: " KITM",
    },
    {
      title: "KITM Facebook",
      a: "https://www.facebook.com/kaunoitmokykla/",
      icon: <FacebookIcon />,
      text: "Facebook",
    },
  ];

  return (
    <>
      <div className={classes.root}>
        <List component="nav">
          {data.map((data, index) => {
            return (
              <motion.li
                variants={variants}
                key={index}
                // whileHover={{ scale: 1.1 }}
                // whileTap={{ scale: 0.95 }}
                style={{ minWidth: "100%" }}
              >
                <Tooltip title={data.title} placement="left" arrow>
                  <ListItem
                    button
                    component="a"
                    href={data.a}
                    target="_blank"
                    disabled={!open}
                  >
                    <ListItemIcon>{data.icon}</ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="h6" color="textSecondary">
                          {data.text}
                        </Typography>
                      }
                    />
                  </ListItem>
                </Tooltip>
              </motion.li>
            );
          })}
          <motion.div variants={variants} style={{ minWidth: "100%" }}>
            <Divider variant="middle" />
          </motion.div>
        </List>
      </div>
    </>
  );
};
