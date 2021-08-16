import { UserRole, CategoriesLv1 } from "@/constants/UserData";

export type IUserData = {
  role: UserRole;
  done: {
    [key in CategoriesLv1]: number;
  };
};
