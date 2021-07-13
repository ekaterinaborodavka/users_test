import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { PathName } from "~src/types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      width: "100%",
      padding: theme.spacing(2),
    },
    buttoncontainer: {
      position: "fixed",
      bottom: 0,
    },
    link: {
      width: "100%",
      textDecoration: "none",
    },
  })
);

export const CreateButton: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.buttoncontainer} container justifyContent="center" alignItems="center">
      <Link className={classes.link} to={PathName.create}>
        <Button className={classes.button} variant="contained" color="primary">
          Create
        </Button>
      </Link>
    </Grid>
  );
};
