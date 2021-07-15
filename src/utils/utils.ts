import { User } from "~src/types";

export const findEditUser = (id: number, users: User[]): User => {
  const ind = users.findIndex((user) => user.id === id);
  return users[ind];
};

const createDateString = (date: string): string => {
  const dateBirth = new Date(date);
  return `${dateBirth.getMonth() + 1} / ${dateBirth.getFullYear()}`;
};

export const editCurrentUser = (id: number, users: User[], data: any): User[] => {
  for (const props in data) {
    if (!data[props]) {
      delete data[props];
    }
  }

  if (data?.birthday) {
    data.birthday = createDateString(data.birthday);
  }

  const newUser = users.map((user) => {
    if (user.id === id) {
      return { ...user, ...data };
    }
    return user;
  });

  return newUser;
};

export const createUser = (user: User, users: User[]): User => {
  const { firstName, lastName } = user;
  const avatar = letterAvatar(users, firstName, lastName);

  user.color = "#" + Math.random().toString(16).substring(2, 8).toUpperCase();
  user.id = Date.now();
  user.avatar = avatar;
  user.birthday = createDateString(user.birthday);
  return user;
};

export const addNewUser = (user: User, users: User[]): User[] => {
  const newUser = createUser(user, users);
  const newUsers = [...users, newUser];
  return newUsers;
};

export const deleteCurrentUser = (id: number, user: User[]): User[] => {
  return user.filter((user) => user.id !== id);
};

export const letterAvatar = (users: User[], firstName: string, lastName: string): string => {
  let letterAvatar = (firstName[0] + lastName[0]).toUpperCase();
  const letterArr: string[] = [];
  users.map((user) => {
    letterArr.push(user.avatar.toUpperCase());
  });
  const letter = () => {
    const ind = letterArr.indexOf(letterAvatar);
    if (ind !== -1) {
      const count = letterArr[ind].length;
      letterAvatar = (firstName[0] + lastName.substring(0, count)).toUpperCase();
      if (count !== lastName.length + 1) {
        letter();
      }
    }
  };
  letter();

  return letterAvatar;
};

export const uniqueEmail = (email: string, users: User[]): string | void => {
  const ind = users.findIndex((user) => user.email === email);
  if (ind !== -1) {
    return "This email is taken";
  }
};
