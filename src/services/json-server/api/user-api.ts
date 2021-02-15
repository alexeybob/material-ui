import axios from 'axios';
import { IUserModel } from '../models';

const baseURL = 'http://localhost:3004/api';

export const findAllUsers = async (): Promise<IUserModel[]> => {
  const { data } = await axios.get(`${baseURL}/users`);

  return data;
};
