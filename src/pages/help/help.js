import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

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

const Help = () => {
  const classes = useStyles();
  let history = useHistory();

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
    </Box>
  );
};

export default Help;
