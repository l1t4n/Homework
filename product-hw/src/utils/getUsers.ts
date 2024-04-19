import { UserType } from "../enums";
import { User } from "../schemas";

export const getUsers = () => {
  return [
    new User("1", "1", "1", UserType.Admin),
    new User("2", "guest", "guest", UserType.Guest),
  ];
};
