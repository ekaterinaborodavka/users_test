import React, { useCallback, useContext } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, Paper, Divider } from "@material-ui/core";

import { PathName, User } from "~src/types";
import { Context } from "~src/context/context";
import { deleteCurrentUser, findEditUser } from "~src/utils/utils";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      margin: 15,
      width: 400,
    },
    header: {
      display: "flex",
      justifyContent: "space-betwwen",
    },
    name: {
      padding: theme.spacing(4, 0, 0, 2),
      textAlign: "center",
    },
    content: {
      padding: theme.spacing(1, 5),
    },
    actions: {
      display: "flex",
      justifyContent: "center",
    },
    avatar: {
      width: 100,
      height: 100,
      margin: theme.spacing(0, 0, 0, 2),
      fontSize: "1rem",
    },
  })
);

export const CardUser: React.FC<User> = ({
  firstName,
  lastName,
  email,
  yearOfBirth,
  zodiac,
  bloodType,
  id,
  avatar,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const { users, setUsers, setEditUser } = useContext(Context);

  const removeUser = useCallback(() => {
    const newUsers = deleteCurrentUser(id, users);
    setUsers(newUsers);
    localStorage.setItem("users", JSON.stringify(newUsers));
  }, [id, users, setUsers]);

  const editUserId = useCallback(() => {
    setEditUser(findEditUser(id, users));
    history.push(PathName.create);
  }, [id, setEditUser, history, users]);

  const color = "#" + Math.random().toString(16).substring(2, 8).toUpperCase();

  return (
    <Paper className={classes.paper}>
      <Card>
        <CardActionArea>
          <CardContent className={classes.header}>
            <Avatar className={classes.avatar} style={{ background: color }}>
              {avatar}
            </Avatar>
            <Typography className={classes.name} gutterBottom variant="h5" component="h2">
              {`${firstName} ${lastName}`}
            </Typography>
          </CardContent>
          <Divider />
          <CardContent className={classes.content}>
            <Typography variant="body2" component="p">
              {`Email:  ${email}`}
            </Typography>
            <Typography variant="body2" component="p">
              {`Year of birth:  ${yearOfBirth}`}
            </Typography>
            {zodiac && (
              <Typography variant="body2" component="p">
                {`Zodiac:  ${zodiac}`}
              </Typography>
            )}
            {bloodType && (
              <Typography variant="body2" component="p">
                {`Blood type:  ${bloodType}`}
              </Typography>
            )}
          </CardContent>
        </CardActionArea>
        <Divider />
        <CardActions className={classes.actions}>
          <Button color="primary" onClick={editUserId}>
            Edit
          </Button>
          <Button color="secondary" onClick={removeUser}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </Paper>
  );
};
