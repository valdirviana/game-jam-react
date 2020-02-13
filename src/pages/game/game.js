import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
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
  },
  root: {
    flexGrow: 1,
    marginTop: 10
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 100
  }
}));

const Game = () => {
  const classes = useStyles();
  let history = useHistory();

  const backToStartPage = () => {
    history.goBack();
  };

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
      </React.Fragment>
    );
  }

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
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default Game;
