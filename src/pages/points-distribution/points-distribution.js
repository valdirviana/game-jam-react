import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Image from "material-ui-image";
import Zoom from "@material-ui/core/Zoom";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  imageBox: {
    width: 175,
    margin: theme.spacing(4),
    border: "5px solid white",
    cursor: "pointer"
  },
  charStats: {
    // backgroundColor: "rgba(0, 0, 0, 0.2)"
  },
  boxBar: {
    width: 600,
    height: 48,
    // backgroundColor: "rgba(0, 0, 0, 0.2)",
    marginBottom: theme.spacing(2)
  },
  boxTitle: {
    marginTop: theme.spacing(1),
    color: "#FFF"
  },
  points: {
    color: "#FFF"
  },
  startGame: {
    marginTop: theme.spacing(8)
  }
}));

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const PointsDistribution = props => {
  const query = useQuery();
  const classes = useStyles();
  const history = useHistory();

  const selectedChar = query.get("char");

  const [yellowLevel, setYellowLevel] = useState(0);

  const backToStartPage = () => {
    history.goBack();
  };

  const goToStartGame = () => {
    
  };

  const decrease = () => {
    if (yellowLevel > 0) setYellowLevel(yellowLevel - 1);
  };

  const increase = () => {
    if (yellowLevel < 4) setYellowLevel(yellowLevel + 1);
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
        justifyContent="flex-start"
        className={classes.charStats}
      >
        <Box display="flex" flexDirection="column" justifyContent="center">
          <Zoom in={true} style={{ transitionDelay: "0ms" }}>
            <Box>
              <Box className={classes.imageBox}>
                <Image src={`/assets/${selectedChar}.png`} />
              </Box>
              <Typography className={classes.points} variant="h5">
                PONTOS
              </Typography>
              <Typography className={classes.points} variant="h5">
                1100 / 1500
              </Typography>
            </Box>
          </Zoom>
        </Box>
        <Box display="flex" flexDirection="column">
          <Zoom in={true} style={{ transitionDelay: "0ms" }}>
            <Box>
              <Box
                display="flex"
                justifyContent="center"
                className={classes.boxTitle}
              >
                <Typography variant="h5" component="h2">
                  PLANO DE SAÚDE
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                flexWrap="no-wrap"
                justifyContent="space-around"
                className={classes.boxBar}
              >
                <Button
                  variant="contained"
                  size="small"
                  className={classes.backButton}
                  onClick={decrease}
                >
                  <ArrowBackIcon fontSize="large" />
                </Button>
                <img
                  src={
                    yellowLevel === 0
                      ? `/assets/empty-bar.png`
                      : `/assets/green-bar-${yellowLevel}.png`
                  }
                />
                <Button
                  variant="contained"
                  size="small"
                  className={classes.backButton}
                  onClick={increase}
                >
                  <ArrowForwardIcon fontSize="large" />
                </Button>
              </Box>
            </Box>
          </Zoom>
          <Zoom in={true} style={{ transitionDelay: "0ms" }}>
            <Box>
              <Box
                display="flex"
                justifyContent="center"
                className={classes.boxTitle}
              >
                <Typography variant="h5" component="h2">
                  PLANO DE SAÚDE
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                flexWrap="no-wrap"
                justifyContent="space-around"
                className={classes.boxBar}
              >
                <Button
                  variant="contained"
                  size="small"
                  className={classes.backButton}
                  onClick={decrease}
                >
                  <ArrowBackIcon fontSize="large" />
                </Button>
                <img
                  src={
                    yellowLevel === 0
                      ? `/assets/empty-bar.png`
                      : `/assets/green-bar-${yellowLevel}.png`
                  }
                />
                <Button
                  variant="contained"
                  size="small"
                  className={classes.backButton}
                  onClick={increase}
                >
                  <ArrowForwardIcon fontSize="large" />
                </Button>
              </Box>
            </Box>
          </Zoom>
          <Zoom in={true} style={{ transitionDelay: "0ms" }}>
            <Box>
              <Box
                display="flex"
                justifyContent="center"
                className={classes.boxTitle}
              >
                <Typography variant="h5" component="h2">
                  PLANO DE SAÚDE
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                flexWrap="no-wrap"
                justifyContent="space-around"
                className={classes.boxBar}
              >
                <Button
                  variant="contained"
                  size="small"
                  className={classes.backButton}
                  onClick={decrease}
                >
                  <ArrowBackIcon fontSize="large" />
                </Button>
                <img
                  src={
                    yellowLevel === 0
                      ? `/assets/empty-bar.png`
                      : `/assets/green-bar-${yellowLevel}.png`
                  }
                />
                <Button
                  variant="contained"
                  size="small"
                  className={classes.backButton}
                  onClick={increase}
                >
                  <ArrowForwardIcon fontSize="large" />
                </Button>
              </Box>
            </Box>
          </Zoom>
          <Zoom in={true} style={{ transitionDelay: "0ms" }}>
            <Box>
              <Box
                display="flex"
                justifyContent="center"
                className={classes.boxTitle}
              >
                <Typography variant="h5" component="h2">
                  PLANO DE SAÚDE
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                flexWrap="no-wrap"
                justifyContent="space-around"
                className={classes.boxBar}
              >
                <Button
                  variant="contained"
                  size="small"
                  className={classes.backButton}
                  onClick={decrease}
                >
                  <ArrowBackIcon fontSize="large" />
                </Button>
                <img
                  src={
                    yellowLevel === 0
                      ? `/assets/empty-bar.png`
                      : `/assets/green-bar-${yellowLevel}.png`
                  }
                />
                <Button
                  variant="contained"
                  size="small"
                  className={classes.backButton}
                  onClick={increase}
                >
                  <ArrowForwardIcon fontSize="large" />
                </Button>
              </Box>
            </Box>
          </Zoom>
        </Box>
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="center">
        <Button
          variant="contained"
          size="large"
          className={classes.startGame}
          onClick={goToStartGame}
        >
          COMEÇAR O JOGO
        </Button>
      </Box>
    </Box>
  );
};

export default PointsDistribution;
