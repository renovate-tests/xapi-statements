import Member from 'jscommons/dist/utils/Member';
import ClientModel from '../../../models/ClientModel';
import StatementHash from '../../../models/StatementHash';

export interface Opts {
  ids: string[];
  client: ClientModel;
}

type Signature = Member<Opts, StatementHash[]>;

export default Signature;
