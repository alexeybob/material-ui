export interface IBaseModel {
  [key: string]: string | number | boolean;
}

export interface IUserModel extends IBaseModel {
  id: number;
  name: string;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  confirmed: boolean;
  createdAt: string;
  expiredAt: string;
}
