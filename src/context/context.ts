import { createContext } from "react";
import { User } from "~src/types";

interface ContextProps {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  editUser: User;
  setEditUser: React.Dispatch<React.SetStateAction<User>>;
}

export const Context = createContext({} as ContextProps);
