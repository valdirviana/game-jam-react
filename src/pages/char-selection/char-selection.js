import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import Image from "material-ui-image";
import Zoom from "@material-ui/core/Zoom";

const useStyles = makeStyles(theme => ({
  backButton: {},
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  imageBox: {
    width: 175,
    margin: theme.spacing(4),
    border: "5px solid white",
    cursor: "pointer",
    "&:hover": {
      border: "5px solid red"
    }
  }
}));

const CharSelection = () => {
  const classes = useStyles();
  let history = useHistory();

  const backToStartPage = () => {
    history.goBack();
  };

  const goToPointsDistribution = (charSelected) => {
    history.push(`/points?char=${charSelected}`);
  };

  return (
    <Box display="flex" flexDirection="column">
      <Box>
        <Button
          variant="contained"
          size="small"
          className={classes.backButton}
          onClick={backToStartPage}
        >
          <KeyboardBackspaceIcon fontSize="large" />
        </Button>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
      >
        <Zoom in={true} style={{ transitionDelay: "0ms" }}>
          <Box className={classes.imageBox} onClick={() => goToPointsDistribution('mario')}>
            <Image src="/assets/mario.png" />
          </Box>
        </Zoom>
        <Zoom in={true} style={{ transitionDelay: "50ms" }}>
          <Box className={classes.imageBox} onClick={() => goToPointsDistribution('luigi')}>
            <Image src="/assets/luigi.png" />
          </Box>
        </Zoom>
        <Zoom in={true} style={{ transitionDelay: "150ms" }}>
          <Box className={classes.imageBox} onClick={() => goToPointsDistribution('peach')}>
            <Image src="/assets/peach.png" />
          </Box>
        </Zoom>
        <Zoom in={true} style={{ transitionDelay: "200ms" }}>
          <Box className={classes.imageBox} onClick={() => goToPointsDistribution('toad')}>
            <Image src="/assets/toad.png" />
          </Box>
        </Zoom>
        <Zoom in={true} style={{ transitionDelay: "250ms" }}>
          <Box className={classes.imageBox} onClick={() => goToPointsDistribution('yoshi')}>
            <Image src="/assets/yoshi.png" />
          </Box>
        </Zoom>
        <Zoom in={true} style={{ transitionDelay: "300ms" }}>
          <Box className={classes.imageBox} onClick={() => goToPointsDistribution('dk')}>
            <Image src="/assets/dk.png" />
          </Box>
        </Zoom>
        <Zoom in={true} style={{ transitionDelay: "350ms" }}>
          <Box className={classes.imageBox} onClick={() => goToPointsDistribution('wario')}>
            <Image src="/assets/wario.png" />
          </Box>
        </Zoom>
        <Zoom in={true} style={{ transitionDelay: "400ms" }}>
          <Box className={classes.imageBox} onClick={() => goToPointsDistribution('bowser')}>
            <Image src="/assets/bowser.png" />
          </Box>
        </Zoom>
      </Box>
    </Box>
  );
};

export default CharSelection;
