import { UserType } from "../../enums";
import { IUser } from "../../interfaces";

export class User implements IUser {
  constructor(
    private login: string,
    private password: string,
    private userType: UserType
  ) {}

  getLogin(): string {
    return this.login;
  }

  getPassword(): string {
    return this.password;
  }

  getUserType(): UserType {
    return this.userType;
  }
}
