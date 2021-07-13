import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import { User } from "~src/types";
import { CardUser } from "~components";

interface CardUserListProps {
  users: User[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardgrid: {
      padding: theme.spacing(0, 0, 7, 0),
    },
  })
);

export const CardUserList: React.FC<CardUserListProps> = ({ users }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.cardgrid} container direction="column" justifyContent="center" alignItems="center">
      {users.map((user) => (
        <CardUser key={user.id} {...user} />
      ))}
    </Grid>
  );
};
