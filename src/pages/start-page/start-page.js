import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Zoom from "@material-ui/core/Zoom";
import PlayArrowSharpIcon from "@material-ui/icons/PlayArrowSharp";
import InfoSharpIcon from "@material-ui/icons/InfoSharp";
import HelpSharpIcon from "@material-ui/icons/HelpSharp";
import Image from 'material-ui-image'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: `url(https://i.pinimg.com/originals/8b/55/cf/8b55cf654c0e6f4bfdf0ddf0d167f2a2.jpg)`,
    width: 1280,
    height: 720,
    borderRadius: 6,
    boxShadow:
      "rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px"
  },
  box: {
    // backgroundColor: "rgba(0, 0, 0, 0.2)",
    width: 350,
    paddingTop: theme.spacing(4)
  },
  button: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    fontWeight: "bolder",
    width: "100%",
    height: 70,
    fontSize: 24
  },
  buttonIcon: {
    marginRight: theme.spacing(1)
  },
  link: {
    textDecoration: "none"
  },
  boxImage: {
    width: 800,
    // backgroundColor: "rgba(0, 0, 0, 0.2)",
    paddingLeft: 100
  }
}));

const StartPage = () => {
  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="row">
      <Box display="flex" flexDirection="column" m={4} className={classes.box}>
        <Zoom in={true}>
          <Link className={classes.link} to="/char">
            <Button variant="contained" className={classes.button}>
              <PlayArrowSharpIcon className={classes.buttonIcon} /> Start Game
            </Button>
          </Link>
        </Zoom>
        <Zoom in={true} style={{ transitionDelay: "150ms" }}>
          <Link className={classes.link} to="/infos">
            <Button variant="contained" className={classes.button}>
              <InfoSharpIcon className={classes.buttonIcon} />
              Infos
            </Button>
          </Link>
        </Zoom>
        <Zoom in={true} style={{ transitionDelay: "300ms" }}>
          <Link className={classes.link} to="/help">
            <Button variant="contained" className={classes.button}>
              <HelpSharpIcon className={classes.buttonIcon} />
              Help
            </Button>
          </Link>
        </Zoom>
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="center" className={classes.boxImage}>
        <Image aspectRatio={(16/9)} src="https://res.cloudinary.com/lmn/image/upload/c_limit,h_360,w_640/e_sharpen:100/f_auto,fl_lossy,q_auto/v1/gameskinnyc/b/r/o/broforce-logo-painted-1408025571-62ff1.jpg" />
      </Box>
    </Box>
  );
};

export default StartPage;
