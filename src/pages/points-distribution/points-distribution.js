import React from "react";
import { useHistory, useParams, useLocation } from "react-router-dom";
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
    cursor: "pointer"
  }
}));

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const PointsDistribution = props => {
  const query = useQuery();
  const classes = useStyles();
  const history = useHistory();

  const selectedChar = query.get('char');

  const backToStartPage = () => {
    history.goBack();
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
      >
        <Zoom in={true} style={{ transitionDelay: "0ms" }}>
          <Box className={classes.imageBox}>
            <Image src={`/assets/${selectedChar}.png`} />
          </Box>
        </Zoom>
      </Box>
    </Box>
  );
};

export default PointsDistribution;
