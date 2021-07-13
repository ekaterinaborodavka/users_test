import React, { useCallback, useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  Button,
  TextField,
  Select,
  Typography,
  MenuItem,
  InputLabel,
  Paper,
  Grid,
  FormControl,
} from "@material-ui/core";

import { PathName, User, zodiacs } from "~src/types";
import { addNewUser, editCurrentUser, uniqueEmail } from "~src/utils/utils";
import { Context } from "~src/context/context";
import { schema } from "~src/utils/schema";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      display: "flex",
      flexDirection: "column",
    },
    paper: {
      width: "40%",
      padding: theme.spacing(2),
    },
    formgrid: {
      marginTop: 30,
    },
    button: {
      marginTop: 20,
    },
    field: {
      margin: 5,
    },
    title: {
      textAlign: "center",
    },
    defaultoption: {
      display: "none",
    },
    buttonback: {
      marginBottom: 10,
    },
  })
);

export const CreateUserForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<User>({
    resolver: yupResolver(schema),
  });
  const { users, setUsers, editUser, setEditUser } = useContext(Context);
  const classes = useStyles();
  const history = useHistory();
  const onSubmit: SubmitHandler<User> = (data) => onSubmitForm(data);
  const edit = Object.keys(editUser).length;

  const onCreateUser = useCallback(
    (data) => {
      const newUsers = addNewUser(data, users);
      setUsers(newUsers);
      localStorage.setItem("users", JSON.stringify(newUsers));
      history.push(PathName.home);
    },
    [history, users, setUsers]
  );

  const onEditUser = useCallback(
    (data) => {
      const newUsers = editCurrentUser(editUser.id, users, data);
      setUsers(editCurrentUser(editUser.id, users, data));
      localStorage.setItem("users", JSON.stringify(newUsers));
      setEditUser({} as User);
      history.push(PathName.home);
    },
    [history, users, setUsers, editUser, setEditUser]
  );

  const onSubmitForm = useCallback(
    (data) => {
      const errorEmail = uniqueEmail(data.email, users);
      if (errorEmail) {
        setError("email", { message: errorEmail });
      } else {
        edit ? onEditUser(data) : onCreateUser(data);
      }
    },
    [edit, onEditUser, onCreateUser, setError, users]
  );

  const goHomePage = useCallback(() => {
    setEditUser({} as User);
    history.push(PathName.home);
  }, [history, setEditUser]);

  return (
    <Grid className={classes.formgrid} container direction="column" justifyContent="center" alignItems="center">
      <Button onClick={goHomePage} className={classes.buttonback} type="button" variant="contained" color="primary">
        Home
      </Button>
      <Paper className={classes.paper}>
        <Typography className={classes.title} component="h1" variant="h5">
          {edit ? "Edit User" : "Create User"}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            error={Boolean(errors.firstName)}
            className={classes.field}
            defaultValue={edit ? editUser.firstName : null}
            required={!edit}
            id="standard-basic"
            label={!Boolean(errors.firstName) ? "First name" : errors.firstName?.message}
            {...register("firstName")}
          />
          <TextField
            className={classes.field}
            error={Boolean(errors.lastName)}
            defaultValue={edit ? editUser.lastName : null}
            required={!edit}
            id="standard-basic"
            label={!Boolean(errors.lastName) ? "Last name" : errors.lastName?.message}
            {...register("lastName")}
          />
          <TextField
            error={Boolean(errors.yearOfBirth)}
            defaultValue={edit ? editUser.yearOfBirth : null}
            className={classes.field}
            required={!edit}
            type="number"
            label={!Boolean(errors.yearOfBirth) ? "Year of birth" : errors.yearOfBirth?.message}
            {...register("yearOfBirth")}
          />
          <TextField
            className={classes.field}
            error={Boolean(errors.email)}
            defaultValue={edit ? editUser.email : null}
            required={!edit}
            type="email"
            id="standard-basic"
            label={!Boolean(errors.email) ? "Email" : errors.email?.message}
            {...register("email")}
          />
          <FormControl className={classes.field}>
            <InputLabel id="demo-simple-select-label">
              {!Boolean(errors.zodiac) ? "Zodiac" : errors.zodiac?.message}
            </InputLabel>
            <Select
              error={Boolean(errors.zodiac)}
              defaultValue=""
              labelId="demo-simple-select-label"
              {...register("zodiac")}
            >
              {zodiacs.map((zodiac) => (
                <MenuItem key={zodiac.id} value={zodiac.name}>
                  {zodiac.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            className={classes.field}
            error={Boolean(errors.bloodType)}
            defaultValue={edit ? editUser.bloodType : null}
            id="standard-basic"
            label={!Boolean(errors.bloodType) ? "Blood Type (example: +2)" : errors.bloodType?.message}
            {...register("bloodType")}
          />
          <Button className={classes.button} type="submit" variant="contained" color="primary">
            Save
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};
