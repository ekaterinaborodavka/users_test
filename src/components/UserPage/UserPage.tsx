import React, { useContext } from "react";
import { CardUserList, CreateButton } from "~components";
import { Context } from "~src/context/context";

export const UserPage: React.FC = () => {
  const { users } = useContext(Context);

  return (
    <>
      <CardUserList users={users} />
      <CreateButton />
    </>
  );
};
