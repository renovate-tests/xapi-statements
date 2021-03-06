import { ObjectID } from 'mongodb';
import FacadeConfig from '../utils/mongoModels/FacadeConfig';
import { LRS_COLLECTION_NAME } from '../utils/mongoModels/constants';
import Signature, { Opts } from './Signature';

export default (config: FacadeConfig): Signature => {
  return async ({ client, count }) => {
    const collection = (await config.db()).collection(LRS_COLLECTION_NAME);
    const filter = { _id: new ObjectID(client.lrs_id) };
    const update = { $inc: { statementCount: count } };
    await collection.updateOne(filter, update);
  };
};
