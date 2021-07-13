import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Context } from "~src/context/context";
import { PathName, User } from "~src/types";
import { UserPage, CreateUserForm } from "~components";

export const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([] as User[]);
  const [editUser, setEditUser] = useState<User>({} as User);

  useEffect(() => {
    const users = localStorage.getItem("users");
    if (users) {
      setUsers(JSON.parse(users));
    }
  }, []);

  return (
    <Context.Provider value={{ users, setUsers, editUser, setEditUser }}>
      <Router>
        <Switch>
          <Route exact path={PathName.home} component={UserPage} />
          <Route exact path={PathName.create} component={CreateUserForm} />
        </Switch>
      </Router>
    </Context.Provider>
  );
};
