export interface IUserModel {
  id: number | { f: number | string; v: number };
  name: string | { f: string; v: string };
  firstName: string | { f: string; v: string };
  lastName: string | { f: string; v: string };
  gender: string | { f: string; v: string };
  email: string | { f: string; v: string };
  confirmed: boolean | { f: string; v: boolean };
  createdAt: string | { f: string; v: string };
  expiredAt: string | { f: string; v: string };
}
