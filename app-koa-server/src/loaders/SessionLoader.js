import { fromGlobalId } from 'graphql-relay';
import SessionModel from '../models/session';

export default class Session {

};

export const load = async ({ _id }) => {
  const session = await SessionModel.find({ _id });

  if (!session) return null;

  return session[0];
}

export const loadAll = async () => {
  const session = await SessionModel.find();
  return session;
}
