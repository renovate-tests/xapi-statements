import groupTest from './utils/groupTest';
import assertFilteredStatements from '../utils/assertFilteredStatements';
import assertFilteredStatementRefs from '../utils/assertFilteredStatementRefs';

const createActor = (team: any) => {
  return { context: { team } };
};

describe('get statements by agent in team', () => {
  groupTest(assertFilteredStatements)(createActor, true);
});

describe('get statements by agent in team with references', () => {
  groupTest(assertFilteredStatementRefs)(createActor, true);
});
