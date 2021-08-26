import { UserRole, CategoriesLv1 } from '@/constants/UserData';
import { IQuestionVer, IUserData } from '@/typings';

export const initUserData: IUserData = {
  role: UserRole.fe,
  done: {
    [CategoriesLv1.fe]: 0,
    [CategoriesLv1.be]: 0,
    [CategoriesLv1.cb]: 0,
  },
};

export const initQuestionVer: IQuestionVer = [];

export enum LocalStorage {
  'UserData' = 'UserData',
  'QuestionVer' = 'QuestionVer',
}
